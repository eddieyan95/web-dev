import PostItem from "./PostItem.js";
import po from "./po.js";


const PostList = () => {
    return (`
            <ul class="list-group">
            <!-- continue here -->
            ${
        po.map(po => {
            return(PostItem(po));
        }).join('')
    }
            </ul>
`); }

export default  PostList;