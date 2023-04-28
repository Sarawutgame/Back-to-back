import "./leftbar.css"
import React from "react"

export default function Leftbar(){

    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <span className="title">อยากโพสอะไรไหม ?</span>
                <button className="createButton">
                    สร้างโพส
                </button>
            </div>
        </div>
    )
}