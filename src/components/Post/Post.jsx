import "./post.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faFlag, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo.svg';

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={logo} alt="" />
                    <div className="postInfo">
                        <span className="postUsername">user</span>
                        <span className="postType">type</span>
                    </div>
                </div>
                <div className="postTopRight">
                    <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">hello world</span>
                <img src={logo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FontAwesomeIcon icon={faHeart} className="icon"/>
                    <FontAwesomeIcon icon={faComment} className="icon"/>
                    <FontAwesomeIcon icon={faFlag} className="icon"/>
                    {/* <span className="icon">like </span>
                    <span className="icon">comment </span>
                    <span className="icon">report</span> */}
                </div>
                <div className="postBottomRight">
                    <span className="postDate">เวลา 15.49 13/04/2023</span>
                </div>
            </div>
        </div>
    </div>
  )
}
