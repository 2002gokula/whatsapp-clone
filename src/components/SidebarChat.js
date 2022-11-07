import { Avatar } from "@material-ui/core"
import React from "react"
import "./SidebarChat.css"
const SidebarChat = () => {
  return (
    <div className="SidebarChat">
      <Avatar style={{ marginTop: "5px" }} className="SidebarChat__Avator" />
      <div className="SidebarChat__info">
        <div className="SidebarChat__title">
          <h4>rooommmmmm</h4>
          <span>Time</span>
        </div>
        <div className="SidebarChat__Message">
          <p>This messgae m gokula krishnan</p>
        </div>
      </div>
    </div>
  )
}

export default SidebarChat
