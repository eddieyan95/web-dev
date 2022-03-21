import React from "react";
import {Link} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";

import WhoToFollowList from "./WhoToFollowList";
import PostSummaryList from "./PostSummaryList";
import ExploreComponent from "./explore-screen /ExploreComponent";
import ExploreScreen from "./explore-screen /ExploreScreen";
import PostItem from "./PostList/PostItem";
import HomeScreen from "./home-screen/HomeScreen";


const Tuiter = () => {
    return(
        <>
            <h1>Tuiter</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/">
                Labs
            </Link>
            {/*<NavigationSidebar active="explore"/>*/}
            {/*<WhoToFollowList/>*/}
            {/*<PostSummaryList/>*/}
            {/*<ExploreComponent/>*/}
            <ExploreScreen/>
            {/*<PostItem/>*/}
            {/*<HomeScreen/>*/}

        </>
    )
};


export default Tuiter;