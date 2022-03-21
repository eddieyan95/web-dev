import React from "react";
import posts from "../PostSummaryList/posts.json"
import PostSummaryItem from "./PostSummaryItem";


const PostSummaryList = () => {
    return (
        <>
            <ul className="list-group">

            {
        posts.map(posts => {
            return <PostSummaryItem posts={posts} />;
        })
    }
            </ul>
         </>); }

export default  PostSummaryList;
