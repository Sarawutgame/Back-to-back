import React, { useEffect, useState } from "react"
import "./profile.css"
import logo from "../../logo.svg"
import Topbar from "../../components/Topbar/Topbar"
// import { Modal } from "@mui/material";
import ProfileModal from "../../components/Modal/ProfileModal/ProfileModal";
import { useLocation } from "react-router-dom";

// import Box from "@mui/material";
// import Typography from "@mui/material";

// import Backdrop from '@mui/material/Backdrop';

export default function Profile() {
    const location = useLocation();
    const [user, setUser] = useState([]);
    const [random, setRandom] = useState(false);
    const [modal, setModal] = useState(false);
    const id = location.state?.userid;

    // const userJson = {
    //     "userId": "644fc1664a26b861c8170394"
    // }

    useEffect(() => {
        fetch("http://52.201.71.227:3005/userById/" + id, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((value) => {
            setUser(value);
            setRandom(true)
            console.log(user);
        })
    }, [random])

    const handleOnLogout = async (e) => {
        localStorage.clear();
        window.location.href = "/login";
    };



    return (
        <>
            <Topbar />
            <div className="profileContainer">
                <img src={user.imageuserpath} alt="" className="profileImage"/>
                <span>{user.username}</span>
                <div className="inputContainer">
                    <span className="profileTitle">ชื่อ</span>
                    <input type="text" className="profileInput" value={user.username} readOnly />
                </div>
                <div className="inputContainer">
                    <span className="profileTitle">อีเมลล์</span>
                    <input type="text" className="profileInput" value={user.email} readOnly />
                </div>
                <div className="inputContainer">
                    <span className="profileTitle">เบอร์โทร</span>
                    <input type="text" className="profileInput" value={user.phone} readOnly />
                </div>
                <div className="inputContainer">
                    <span className="profileTitle">คณะ</span>
                    <input type="text" className="profileInput" value={user.faculty} readOnly />
                </div>
                <div className="inputContainer-link">
                    <div className="profileLink">
                        <span>ช่องทางการติดต่อ</span>
                        <div className="social">
                            <div>
                                <span>IG: </span>
                                <a style={{"text-decoration": "none", color: "black"}} href={'https://www.instagram.com/' + user.ig}>{user.ig}</a>
                            </div>
                                <span>FB: {user.fb}</span>
                            <div>
                                <span>Twit: </span>
                                <a style={{"text-decoration": "none", color: "black"}} href={'https://www.twitter.com/' + user.twit}>{user.twit}</a>
                            </div>
                            <span>Line: {user.line} </span>
                        </div>
                    </div>
                    <div className="profileButtons">
                        <button className="profileButton">fav</button>
                        <button className="profileButton">rep</button>
                    </div>
                </div>
                <div className="buttonContainer">
                    <button className="button" onClick={() => setModal(true)}>แก้ไข</button>
                    <button className="button" onClick={handleOnLogout}>ออกจากระบบ</button>
                </div>
                {modal && <ProfileModal closeModal={setModal} user={user} setBool={setRandom}/>}
            </div>
        </>
    )
}