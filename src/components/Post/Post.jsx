import "./post.css"
import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faFlag, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import logo from '../../logo.svg';
// import CommentModal from "../Modal/CommentModal/CommentModal";

export default function Post(props) {
    const [currentPost, setCurrentPost] = useState(true);
    const [random, setRandom] = useState(false);
    // console.log(data);
    const post = props.data

    useEffect(() => {
        fetch("http://localhost:3005/getPostComment/" + post._id, {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((value) => {
            setCurrentPost(value);
            setRandom(true);
        })
    }, [random])

    const handleClick = async () => {
        // const postSent = post;
        props.handlePost(currentPost);
        props.postId(post._id);
        props.openCommentModal(true);
    }

    const addLike = async () => {
        const likeJson = {
            like: post.like + 1,
        }
        await fetch("http://localhost:3005/posts/" + post._id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(likeJson)
        })
        .then((res) => {
            res.json()
            // console.log(res.json());
        })
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className="postProfileImg" src={post.imageuserpath} alt="" />
                    <div className="postInfo">
                        <span className="postUsername">{post.username}</span>
                        <span className="postType">{post.type}</span>
                    </div>
                </div>
                <div className="postTopRight">
                    {/* <FontAwesomeIcon icon={faPenToSquare} className="icon" /> */}
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={post.imgPath} alt="" className="postImg" style={{backgroundColor: "black"}}/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <FontAwesomeIcon icon={faHeart} className="icon" onClick={addLike}/>{post.like}
                    <FontAwesomeIcon icon={faComment} className="icon" onClick={handleClick}/>
                    {/* <FontAwesomeIcon icon={faFlag} className="icon"/> */}
                    {/* <span className="icon">like </span>
                    <span className="icon">comment </span>
                    <span className="icon">report</span> */}
                </div>
                <div className="postBottomRight">
                    <span className="postDate">{post.time}</span>
                </div>
            </div>
            {/* {commentModal && <CommentModal closeModal={setCommentModal} />} */}
        </div>
    </div>
  )
}
