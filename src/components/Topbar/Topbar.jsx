import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./topbar.css"
import logo from "../../logo.svg"
import { useNavigate } from 'react-router-dom'

export default function Topbar() {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));
    const userid = user._id;
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
            <span className="logo" onClick={()=>navigate('/')}>Back2back</span>
            <div className="topbarLinks">
                <span className="topbarLink" onClick={()=>navigate('/')}>หน้าแรก</span>
                <span className="topbarLink" onClick={()=>navigate('/listitem')}>หาสิ่งของ</span>
            </div>
        </div>
        <div className="topbarCenter">
            {/* <div className="searchbar">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
                <input type="text" placeholder="Search for anything" className="searchInput" />
            </div> */}
            {/* <button className="searchButton">
                ค้นหา
            </button> */}
        </div>
        <div className="topbarRight">
            <div className="topbarProfile">
                <span className="name">{user.username}</span>
                <img src={user.imageuserpath} alt="" className="profileImg" onClick={()=>navigate('/profile', { state: {userid}})}/>
            </div>
        </div>
    </div>
  )
}
