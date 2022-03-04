import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <ul className="list-group">
            <li class="list-group-item">Who to follow</li>
            <!-- continue here -->
            ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
            
            </ul>
`); }

export default  WhoToFollowList;