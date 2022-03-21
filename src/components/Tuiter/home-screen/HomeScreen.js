import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostList from "../PostList";
import PostSummaryItem from "../PostSummaryList/PostSummaryItem";
import ExploreComponent from "../explore-screen /ExploreComponent";
import PostSummaryList from "../PostSummaryList";

const HomeScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-6 col-md-6 col-lg-6 col-xl-6"
                 style={{"position": "relative"}}>
                <PostList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default HomeScreen;
