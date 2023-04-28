import Post from "../Post/Post"
import "./feed.css"
import React from "react"

export default function Feed(){

    return (
        <div className="feed">
            <div className="feedWrapper">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}