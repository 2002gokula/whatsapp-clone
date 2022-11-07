import "./App.css"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
import Pusher from "pusher-js"
import axios from "./axios"
import { useEffect, useState } from "react"
function App() {
  const [messages, setMessages] = useState([])
  let content = null
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher("3ff41afcef3f0bd36547", {
      cluster: "ap2",
    })

    const channel = pusher.subscribe("message")
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage])
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])
  console.log(messages)
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  )
}

export default App
