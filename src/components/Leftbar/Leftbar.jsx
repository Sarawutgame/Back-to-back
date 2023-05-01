import "./leftbar.css"
import React from "react"

export default function Leftbar({ openModal }){

    return (
        <div className="leftbar">
            <div className="leftbarWrapper">
                <span className="title">อยากโพสอะไรไหม ?</span>
                <button className="createButton" onClick={() => openModal(true)}>
                    สร้างโพส
                </button>
            </div>
        </div>
    )
}