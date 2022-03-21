import React from "react";
import po from "../PostList/po.json"
import PostItem from "./PostItem";


const PostList = () => {
    return (
        <>
            <ul className="list-group">

                {
                    po.map(po => {
                        return <PostItem po={po} />;
                    })
                }
            </ul>
        </>); }

export default  PostList;
