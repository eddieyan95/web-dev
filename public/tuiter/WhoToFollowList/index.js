import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

const WhoToFollowList = () => {
    return (`
           <div className="list-group">
            
            <!-- continue here -->
            ${
        who.map(who => {
            return(WhoToFollowListItem(who));
        }).join('')
    }
            
            </div>
`); }

export default  WhoToFollowList;