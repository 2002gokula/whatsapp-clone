import express from "express"
import mongoose from "mongoose"
import Messages from "./dbmessage.js"
import Pusher from "pusher"
import cors from "cors"
const app = express()
const port = process.env.PORT || 9000

const pusher = new Pusher({
  appId: "1470124",
  key: "5dbc86e6e3e75fe6ac42",
  secret: "9521494de288c9ffaef7",
  cluster: "ap2",
  useTLS: true,
})

app.use(express.json())
app.use(cors())
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*")
//   res.setHeader("Access-Control-Allow-Header", "*")
//   next()
// })

const connectionUrl =
  "mongodb+srv://admin:Gk8883578186@cluster0.7tergn1.mongodb.net/whatsappDB?retryWrites=true&w=majority"
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// pusher
const db = mongoose.connection

db.once("open", () => {
  console.log("DB connected")

  const msgCollection = db.collection("messagecontents")
  const changeStream = msgCollection.watch()

  changeStream.on("change", (change) => {
    console.log("A change occured", change)

    if (change.operationType === "insert") {
      const messageDetails = change.fullDocument
      pusher.trigger("message", "inserted", {
        name: messageDetails.name,
        message: messageDetails.message,
        timestamp: messageDetails.timestamp,
        received: messageDetails.received,
      })
    } else {
      console.log("Error triggering Pusher")
    }
  })
})

// api routes
app.get("/", (req, res) => res.status(200).send("hello world"))

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(200).send(data)
    }
  })
})

app.post("/messages/new", (req, res) => {
  const dbMessage = req.body
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err)
    } else {
      res.status(201).send(data)
    }
  })
})

// listen
app.listen(port, () => console.log(`Listening on localhost:${port}`))
