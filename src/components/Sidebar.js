import React, { useState } from "react"
import "./Sidebar.css"
import SearchIcon from "@mui/icons-material/Search"
import { IconButton, setRef } from "@material-ui/core"
import { Avatar } from "@material-ui/core"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { fontSize } from "@mui/system"
import SidebarChat from "./SidebarChat"
const Sidebar = () => {
  const [searchIcon, setSearchIcon] = useState(true)

  return (
    <div className="sidebar">
      <div className="sidebar__Header">
        <Avatar src="https://pbs.twimg.com/profile_images/1515927573854711810/EyL67-uR_400x400.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <span>
              <svg
                version="1.1"
                id="df9d3429-f0ef-48b5-b5eb-f9d27b2deba6"
                x="0"
                y="0"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class=""
              >
                <path
                  fill="currentColor"
                  d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z"
                ></path>
                <path
                  fill="#009588"
                  d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                ></path>
              </svg>
            </span>
          </IconButton>
          <IconButton>
            <span>
              <svg viewBox="0 0 24 24" width="24" height="24" class="">
                <path
                  fill="currentColor"
                  d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"
                ></path>
              </svg>
            </span>
          </IconButton>
          <IconButton>
            <span>
              <svg viewBox="0 0 24 24" width="24" height="24" class="">
                <path
                  fill="currentColor"
                  d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"
                ></path>
              </svg>
            </span>
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          {searchIcon ? (
            <SearchIcon
              style={{ color: "#54656f", fontSize: "20px" }}
              onClick={(e) => setSearchIcon(false)}
            />
          ) : (
            <ArrowBackIcon
              style={{ color: "green", cursor: "pointer" }}
              onClick={(e) => setSearchIcon(true)}
            />
          )}

          <input
            placeholder="Search or start new chat"
            onClick={(e) => setSearchIcon(false)}
            type="text"
            className="searchInput"
          />
        </div>{" "}
        <span className="FiterIcon">
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            preserveAspectRatio="xMidYMid meet"
            class=""
          >
            <path
              fill="currentColor"
              d="M10 18.1h4v-2h-4v2zm-7-12v2h18v-2H3zm3 7h12v-2H6v2z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="sidebarChat">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  )
}

export default Sidebar
