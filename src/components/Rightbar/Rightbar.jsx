import "./rightbar.css"
import React, { useEffect } from "react"
import { useState } from "react"


export default function Rightbar(props){
    // const [postcheck, setPostCheck] = useState(false);
    // const [talkcheck, setTalkCheck] = useState(false);

    function handlePostChange(event) {
        props.setPostCheck(event.target.checked);
    }
    function handleTalkChange(event) {
        props.setTalkCheck(event.target.checked);
    }
    // useEffect(() => {
    //     console.log(postcheck);
    //     console.log('Talk :'+talkcheck)
    //   }, [postcheck, talkcheck]);
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <span className="title">ตัวกรอง</span>
                <hr />
                <div>
                    <input type="checkbox" className="check" checked={props.postcheck} onChange={handlePostChange}/>
                    <span className="label">หาสิ่งของ</span>
                </div>
                <div>
                    <input type="checkbox" className="check" checked={props.talkcheck} onChange={handleTalkChange}/>
                    <span className="label">พูดคุย</span>
                </div>
            </div>
        </div>
    )
}