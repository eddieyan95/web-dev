import PostSummaryList from "../PostSummaryList/index.js";
import React from "react";
import {Link} from "react-router-dom";
import starship from "../image/starship.webp";

const ExploreComponent = () => {
    return(
        <>
            <div class="row ps-sm-2">
                <div class="col-11">
                    <input class="form-control form-rounded account-bg-color" style={{fontFamily:"Arial,FontAwesome"}} placeholder={"Search Tuiter"} type="text"/>
                </div>


                <div class="col-1 pt-sm-2">
                    <a href="#"><i class="fa-solid fa-gear iconsize setting"></i></a>
                </div>

            </div>

            <div className="mt-3">
                <ul className="nav mb-2 nav-tabs">
                    <li className="nav-item ">
                        <a className="nav-link contentcol " aria-current="page" href="#">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contentcol" href="#">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contentcol" href="#">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contentcol" href="#">Sports</a>
                    </li>
                    <div className="tab-content">
                        <li className="nav-item">
                            <a className="nav-link  hidden-md hidden-sm hidden-xs tab-content nav-tabs  "
                               href="#">Entertainment</a>
                        </li>
                    </div>

                </ul>
            </div>


            <div className="thumbnail">
           <img src={starship} className="img-fluid " alt="Responsive image"/>

                <div className="caption">
                    <p className="tabhightlight">SpaceX's Starship</p>
                </div>

                <PostSummaryList/>
            </div>

   </> );
}

export default ExploreComponent;