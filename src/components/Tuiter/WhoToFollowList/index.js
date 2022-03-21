import React from "react";
import WhoToFollowListItem from
        "./WhoToFollowListItem";
import who from "./who.json";



const WhoToFollowList = () => {
    console.log(who);
    return (<>

           <ul className="list-group">
            <li className="list-group-item">Who to follow</li>
            {
        who.map(who => {
            return <WhoToFollowListItem who={who}/>;
        })
    }

            
            </ul>

        </>); }

export default  WhoToFollowList;