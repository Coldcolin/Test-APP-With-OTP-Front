import React from 'react'
import {NavLink} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import {MdOutlineSettings} from "react-icons/md"
import {FaUserFriends} from "react-icons/fa"
import {RiCompassDiscoverLine} from "react-icons/ri"
import "./Header.css"

const Header = () => {

  const colorObject ={
    color: "white",
}
const activeColorObject ={
    color: "#EC3B6F",
    fontWeight: 900
}
  return (
    <div className="Header" style={{ }}>
    <div className="Header-Links">
        <ul>
            <NavLink to="/home"  style={({ isActive }) =>
          isActive ? activeColorObject : colorObject}><li className="hvr-bounce-to-right"><CgProfile/></li></NavLink>
            <NavLink style={({ isActive }) =>
          isActive ? activeColorObject : colorObject} to="/settings"><li className="hvr-bounce-to-right"  ><MdOutlineSettings/></li></NavLink>
            <NavLink style={({ isActive }) =>
          isActive ? activeColorObject : colorObject} to="buddies"><li className="hvr-bounce-to-right" ><FaUserFriends/></li></NavLink>
            <NavLink style={({ isActive }) =>
          isActive ? activeColorObject : colorObject} to="discover"><li className="hvr-bounce-to-right" ><RiCompassDiscoverLine/></li></NavLink>
        </ul>
    </div>
</div>
  )
}

export default Header