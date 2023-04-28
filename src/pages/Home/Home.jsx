import Feed from "../../components/Feed/Feed"
import Leftbar from "../../components/Leftbar/Leftbar"
import Rightbar from "../../components/Rightbar/Rightbar"
import Topbar from "../../components/Topbar/Topbar"
import "./home.css"
import React from "react"


export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}