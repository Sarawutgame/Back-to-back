import Post from "../Post/Post"
import "./feed.css"
import React, { useEffect, useState } from "react"

export default function Feed(props){
    const [posts, setPosts] = useState([]);
    const [random, setRandom] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3005/allPost", {
            method: 'GET',
        })
        .then((res) => res.json())
        .then((value) => {
            setPosts(value);
            setRandom(true);
            // console.log(posts)
        })
        console.log(posts)
    }, [random])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {posts.map((value, index) => {
                    return <Post key={index} data={value} openCommentModal={props.openCommentModal} handlePost={props.handlePost} postId={props.postId} />
                })}
            </div>
        </div>
    )
}