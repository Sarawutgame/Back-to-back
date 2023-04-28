import "./rightbar.css"
import React from "react"


export default function Rightbar(){

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <span className="title">ตัวกรอง</span>
                <hr />
                <div>
                    <input type="checkbox" className="check" />
                    <span className="label">หาสิ่งของ</span>
                </div>
                <div>
                    <input type="checkbox" className="check" />
                    <span className="label">พูดคุย</span>
                </div>
            </div>
        </div>
    )
}