import Feed from "../../components/Feed/Feed"
import Leftbar from "../../components/Leftbar/Leftbar"
import Modal from "../../components/Modal/Modal"
import Rightbar from "../../components/Rightbar/Rightbar"
import Topbar from "../../components/Topbar/Topbar"
import "./home.css"
import React, { useState } from "react"


export default function Home() {
    const [modal, setModal] = useState(false)
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Leftbar openModal={setModal}/>
                <Feed />
                <Rightbar />
                {modal && <Modal closeModal={setModal} />}
            </div>
        </>
    )
}