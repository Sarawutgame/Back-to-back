import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./topbar.css"
import logo from "../../logo.svg"

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo">Back2back</span>
            <div className="topbarLinks">
                <span className="topbarLink">หน้าแรก</span>
                <span className="topbarLink">หาสิ่งของ</span>
            </div>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
                <input type="text" placeholder="Search for anything" className="searchInput" />
            </div>
            <button className="searchButton">
                ค้นหา
            </button>
        </div>
        <div className="topbarRight">
            <div className="topbarProfile">
                <span className="name">user</span>
                <img src={logo} alt="" className="profileImg"/>
            </div>
        </div>
    </div>
  )
}
