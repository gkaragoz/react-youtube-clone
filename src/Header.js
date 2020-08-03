import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <MenuIcon />
        <img
          className="header_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/200px-YouTube_Logo_2017.svg.png"
          alt="Youtube Logo"
        />
      </div>

      <div className="header_input">
        <input placeholder="Search" type="text" />
        <SearchIcon className="header_inputButton" />
      </div>

      <div className="header_icons">
        <VideoCallIcon className="header_icon" />
        <AppsIcon className="header_icon" />
        <NotificationsIcon className="header_icon" />
        <Avatar
          className="header_icon"
          alt="Gökhan Karagöz"
          src="https://avatars3.githubusercontent.com/u/8139026?s=460&u=38f74d1f880ee29534d900f36711b96b4d5fa604&v=4"
        />
      </div>
    </div>
  );
}

export default Header;
