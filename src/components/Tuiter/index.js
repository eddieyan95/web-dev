import React from "react";
import {Link} from "react-router-dom";
// import NavigationSidebar from "./NavigationSidebar";
//
// import WhoToFollowList from "./WhoToFollowList";
// import PostSummaryList from "./PostSummaryList";
// import ExploreComponent from "./explore-screen /ExploreComponent";
import ExploreScreen from "./explore-screen /ExploreScreen";
// import PostItem from "./PostList/PostItem";
// import HomeScreen from "./home-screen/HomeScreen";
import WhoToFollowList from "./WhoToFollowList/index.js";
import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
// import "./tuiter.css";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";  //load combine reducers
// import {createStore} from "redux";
import {Provider} from "react-redux";
import HomeScreen from "./home-screen";

const reducer = combineReducers({ //combine reducers into single reducer namespace data from each other
                                    tuits: tuitsReducer, who: whoReducer
                                });
const store = createStore(reducer)//create single store from all reducers




const Tuiter = () => {
    return(
        // <>
        //     <h1>Tuiter</h1>
        //     <Link to="/hello">
        //         Hello
        //     </Link> |
        //     <Link to="/">
        //         Labs
        //     </Link>
        //     {/*<NavigationSidebar active="explore"/>*/}
        //     {/*<WhoToFollowList/>*/}
        //     {/*<PostSummaryList/>*/}
        //     {/*<ExploreComponent/>*/}
        //     <ExploreScreen/>
        //     {/*<PostItem/>*/}
        //     {/*<HomeScreen/>*/}
        //
        // </>
       <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-lg-1 col-xl-2">
                <NavigationSidebar/>
            </div>
            <div className="col-10 col-lg-7 col-xl-6">
                <HomeScreen/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                {/*<h2>Who to follow</h2>*/}
                <WhoToFollowList/>
            </div>
        </div>
       </Provider>

    )
};


export default Tuiter;