import React, { useState } from 'react'
import "./commentModal.css"

function CommentModal( props ) {
    const [text, setText] = useState("");
    const [comments, setComments] = useState(props.post)
    const [id, setId] = useState(props.postId)
    const user = JSON.parse(localStorage.getItem("user"));

    const inputText = (event) => {
        setText(event.target.value);
    }

    // console.log(comments)
    // console.log(id)

    async function createComment(){
        const commentJson = {
            postId: id,
            userId: user._id,
            username: user.username,
            text: text,
            imgPath: user.imageuserpath
        }


        await fetch("http://localhost:3005/comment", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(commentJson)
        })
        .then((res) => res.json())
        alert('สร้าง Comment เเล้ว')
    }

  return (
    <div className='commentModalBackground'>
        <div className="commentModalContainer">
            <div className="commentModalTitle">
                <h1 style={{marginBottom: '10px'}}>คอมเมนต์</h1>
            </div>
            <hr className='commentLine2'/>
            <div className="commentModalBody">
                {comments.map((value, index) => {
                    return <Comment key={index} data={value} />
                })}
                {/* <Comment post={props.post}/> */}
            </div>
            <div className="commentModalFooter">
                <div className='comment-profile-tag'>
                    <img src={user.imageuserpath} className='image-profile' alt='profile'/>
                    <input type="text" placeholder="Comment" style={{ width: '90%', height: '40px', borderRadius: '20px', padding: '2%', top: "15px", position: "relative", marginRight: "5px" }} onChange={inputText} value={text}/>
                    {/* <h4 className='name-tag'>Game Proo</h4> */}
                </div>
                <div className="commentButton">
                    <button style={{backgroundColor:'#05AB9F', borderRadius:'30px'}} onClick={createComment}>คอมเมนต์</button>
                    <button style={{backgroundColor:'#b02121', borderRadius:'30px'}} onClick={() => props.closeModal(false)}>ปิด</button>
                </div>
            </div>
        </div>
    </div>
  )
}

function Comment(props) {
    const [comment, setComment] = useState(props.data);
    // console.log();
    console.log(comment);
    
    return(
        <div className='commentContainer'>
            <div className="commentTitle">
                <img src={comment.imgPath} className='image-profile' alt='profile'/>
                <p className='comment-name-tag'>{comment.username}</p>
            </div>
            <hr className='commentLine3'/>
            <input className='text' value={comment.text} readOnly/>
        </div>
    )
}

export default CommentModal