import Feed from "../../components/Feed/Feed"
import Leftbar from "../../components/Leftbar/Leftbar"
import CommentModal from "../../components/Modal/CommentModal/CommentModal"
import Modal from "../../components/Modal/HomeModal/Modal"
import Rightbar from "../../components/Rightbar/Rightbar"
import Topbar from "../../components/Topbar/Topbar"
import "./home.css"
import React, { useEffect, useState } from "react"


export default function Home() {
    const [modal, setModal] = useState(false)
    const [commentModal, setCommentModal] = useState(false)
    const [currentPost, setCurrentPost] = useState([])
    const [currentId, setCurrentId] = useState()

    const [postcheck, setPostCheck] = useState(false);
    const [talkcheck, setTalkCheck] = useState(false);


    const handlePost = (post) => {
        setCurrentPost(post)
    }
    const handleId = (id) => {
        setCurrentId(id)
    }
    // useEffect(() => {
    //     console.log(postcheck);
    //     console.log('Talk :'+talkcheck)
    // }, [postcheck, talkcheck]);
    
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Leftbar openModal={setModal}/>
                <Feed openCommentModal={setCommentModal} handlePost={handlePost} postId={handleId} postcheck={postcheck} talkcheck={talkcheck}/>
                <Rightbar postcheck={postcheck} setPostCheck={setPostCheck} talkcheck={talkcheck} setTalkCheck={setTalkCheck}/>
                {modal && <Modal closeModal={setModal} />}
                {commentModal && <CommentModal closeModal={setCommentModal} post={currentPost} postId={currentId}/>}
            </div>
        </>
    )
}