import React from "react";

const WhoToFollowListItem = ( {
                                  who = {
                                      avatarIcon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/1024px-NASA_Wormball_logo.svg.png',
                                      userName: 'NASA',
                                      handle: 'NASA',
                                  }
                              }
) => {
    return(
        <>
        <li className="nodot list-group-item">
        <div className="row pt-1">
        <div className="col-3">
         <img alt="Responsive image" className="rounded-circle img-fluid"
               src={who.avatarIcon  } /></div>
         <div className="col-5">
            <h6>{who.userName} <i className="fa-solid fa-circle-check"></i></h6>
            <p>@{who.handle}</p>
         </div>
         
         <div className="col-4">
           <button className="btn btn-primary rounded-pill">Follow</button>
         </div>
         
         </div>
         
        </li>
        </>);
}
export default WhoToFollowListItem;
