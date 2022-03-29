import React from "react";
// import tuits from "./tuits.json"; //import the tuits
import TuitListItem from "./tuit-list-item";
// import './tuits.css';
import {useSelector} from "react-redux";


const TuitList = () => {
    const tuits = useSelector(state => state.tuits);


    return (

        <ul className="ttr-tuits list-group">
            {

                tuits.map && tuits.map(tuit => //iterate over each tuit and render it as a tuitlistitem
                                            <TuitListItem key={tuit._id}
                                                         tuit={tuit}/>)
            }
        </ul>
    );
}
export default TuitList;

