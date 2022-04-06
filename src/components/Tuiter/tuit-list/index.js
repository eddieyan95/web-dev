import React, {useEffect,useState} from "react";
import {useDispatch, useSelector}
    from "react-redux";
import * as service
    from '../../../services/tuits-service';

// import tuits from "./tuits.json"; //import the tuits
import TuitListItem from "./tuit-list-item";
// import './tuits.css';
// import {useSelector} from "react-redux";
import {deleteTuit,findAllTuits,createTuit,updateTuit}
    from "../../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
        state => state.tuits);
    const [newTuit, setNewTuit] = useState({tuit: 'New tuit'});
    const dispatch = useDispatch();
    useEffect(() =>
                  findAllTuits(dispatch),
              [dispatch]);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <button onClick={() => createTuit(dispatch, newTuit)}
                        className="btn btn-primary float-end">Tuit</button>
                <textarea className="form-control w-75" onChange={(e) =>
                    setNewTuit({...newTuit, tuit: e.target.value})}></textarea>
            </li>
            {
                tuits.map(tuit =>
                              <li key={tuit._id}
                                  className="list-group-item">
                                  <i className="fas fa-remove float-end"
                                     onClick={() => deleteTuit(dispatch, tuit)}></i>
                                  {tuit.tuit}
                                  <div>
                                      Likes: {tuit.likes}
                                      <i onClick={() => updateTuit(dispatch, {
                                          ...tuit, likes: tuit.likes + 1
                                      })} className="far fa-thumbs-up ms-2"></i>
                                  </div>
                              </li>)
            }
        </ul>
    );
}
// const TuitList = () => {
//     const tuits = useSelector(state => state.tuits);
//     const dispatch = useDispatch();
//     // const findAllTuits = async () => {
//     //     const tuits = await service.findAllTuits();
//     //     dispatch({
//     //                  type: 'FIND_ALL_TUITS',
//     //                  tuits: tuits
//     //              });
//     // }
//     // useEffect(findAllTuits, []);
//     useEffect(() =>
//                   findAllTuits(dispatch),
//               []);
//
//
//
//     return (
//
//         <ul className="ttr-tuits list-group">
//             {
//
//                 tuits.map && tuits.map(tuit => //iterate over each tuit and render it as a tuitlistitem
//                                             <TuitListItem key={tuit._id}
//                                                          tuit={tuit}/>)
//             }
//         </ul>
//     );
// }
export default TuitList;

