import "./post.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faFlag, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo.svg';

export default function Post(props) {
    // console.log(data);
    const post = props.data
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={logo} alt="" />
                    <div className="postInfo">
                        <span className="postUsername">user</span>
                        <span className="postType">{post.type}</span>
                    </div>
                </div>
                <div className="postTopRight">
                    <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
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
                    <span className="postDate">{post.time}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
