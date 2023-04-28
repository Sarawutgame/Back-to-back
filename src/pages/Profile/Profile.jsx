import React from "react"
import "./profile.css"
import logo from "../../logo.svg"
import Topbar from "../../components/Topbar/Topbar"

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <img src={logo} alt="" className="profileImage"/>
                <span>Name</span>
                <div className="inputContainer">
                    <span className="profileTitle">ชื่อ</span>
                    <input type="text" className="profileInput" />
                </div>
                <div className="inputContainer">
                    <span className="profileTitle">อีเมลล์</span>
                    <input type="text" className="profileInput" />
                </div>
                <div className="inputContainer">
                    <span className="profileTitle">เบอร์โทร</span>
                    <input type="text" className="profileInput" />
                </div>
                <div className="inputContainer">
                    <span className="profileTitle">คณะ</span>
                    <input type="text" className="profileInput" />
                </div>
                <div className="inputContainer-link">
                    <div className="profileLink">
                        <span>ช่องทางการติดต่อ</span>
                        <div className="social">
                            <span>link</span>    
                            <span>link</span>    
                            <span>link</span>    
                        </div>
                    </div>
                    <div className="profileButtons">
                        <button className="profileButton">fav</button>
                        <button className="profileButton">rep</button>
                    </div>
                </div>
                <div className="logoutContainer">
                    <button className="logout">ออกจากระบบ</button>
                </div>
            </div>
        </>
    )
}