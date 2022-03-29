import React from "react";
import WhoToFollowListItem from
        "./WhoToFollowListItem";
import who from "./who.json"; //we moved the data into the reducer instead
import {useSelector} from "react-redux"; //import hook to retrieve state from reducer



const WhoToFollowList = () => {

    const who = useSelector(state => state.who);//retrieve state from store
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