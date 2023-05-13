import Post from "../Post/Post"
import "./feed.css"
import React, { useEffect, useState } from "react"

export default function Feed(props){
    const [posts, setPosts] = useState([]);
    const [random, setRandom] = useState(false);
    const [showPost, setShowPost] = useState([]);
    var fillterResult = [];

    useEffect(() => {
        fetch("http://localhost:3005/allPost", {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((value) => {
            setPosts(value);
            setRandom(true);
            setShowPost(value);
            // console.log(posts)
        })
        console.log(posts)
    }, [random])

    useEffect(() => {
        fillterResult = posts.filter((el) =>{
            var passfillter = false;
            if(props.postcheck === props.talkcheck){
                passfillter = true;
            }else if(props.postcheck && el.type === 'Finding'){
                passfillter = true;
            }else if(props.talkcheck && el.type === 'Talking'){
                passfillter = true;
            }
            return passfillter
        })
        fillterResult = JSON.stringify(fillterResult);
        fillterResult = JSON.parse(fillterResult);
        console.log(fillterResult);
        setShowPost(fillterResult);
        // console.log(props.postcheck);
        // console.log('Talk :'+props.talkcheck);

    }, [props.postcheck, props.talkcheck]);

    return (
        <div className="feed">
            <div className="feedWrapper">
                {showPost.map((value, index) => {
                    return <Post key={index} data={value} openCommentModal={props.openCommentModal} handlePost={props.handlePost} postId={props.postId} />
                })}
            </div>
        </div>
    )
}