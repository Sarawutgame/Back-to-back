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
    const handlePost = (post) => {
        setCurrentPost(post)
    }
    const handleId = (id) => {
        setCurrentId(id)
    }
    
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Leftbar openModal={setModal}/>
                <Feed openCommentModal={setCommentModal} handlePost={handlePost} postId={handleId}/>
                <Rightbar />
                {modal && <Modal closeModal={setModal} />}
                {commentModal && <CommentModal closeModal={setCommentModal} post={currentPost} postId={currentId}/>}
            </div>
        </>
    )
}