import React from "react";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active='explore'}) => {
    return(
            <div className="list-group col-12">
                <Link to="/tuiter" className="list-group-item col-12" >
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link to="/tuiter/home"       className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline"> Home</span>

                </Link>
                <Link to="/tuiter/explore"  className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline"> Explore</span>

                </Link>
                <Link to="/notifications" className="list-group-item col-12">
                    <i className="far fa-bell"></i> Notifications
                </Link>
                <Link to="/messages" className="list-group-item col-12">
                    <i className="far fa-envelope"></i> Messages
                </Link>
                <Link to="/list" className="list-group-item col-12">
                    <i className="fas fa-list"></i> Lists
                </Link>
                <Link to="/profile" className="list-group-item col-12">
                    <i className="far fa-user"></i> Profile
                </Link>
                <Link to="/more" className="list-group-item col-12">
                    <i className="fa-solid fa-circle-info"></i> More
                </Link>


                <Link to ="/#"
                   className="btn btn-primary btn-block rounded-pill mt-3">
                    Tweet</Link>



                {/*/!*<a href="../HomeScreen/home.html" style="text-decoration:none">*!/*/}
                {/*/!*{active === 'home' ? <a className="list-group-item active" href="../HomeScreen/home.html"> : <a className="list-group-item" href="../HomeScreen/home.html">}*!/*/}
                {/*<Link to="/tuiter" className="list-group-item">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-2">*/}
                {/*            <i className="fas fa-home"></i>*/}
                {/*        </div>*/}
                {/*        <div className="col-10 d-none d-xl-block">*/}
                {/*            Home*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*/!*</a>*!/*/}
                
                {/*/!*<a href="../ExploreScreen/explore.html" style="text-decoration:none">*!/*/}
                {/*/!*${active === 'explore' ? `<a className="list-group-item active" href="../ExploreScreen/explore.html">` : `<a className="list-group-item" href="../ExploreScreen/explore.html">`}*!/*/}
                {/*<Link to="/explore" className="list-group-item">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-2">*/}
                {/*            <i className="fas fa-hashtag"></i>*/}
                {/*        </div>*/}
                {/*        <div className="col-10 d-none d-xl-block">*/}
                {/*            Explore*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*/!*</a>*!/*/}
                {/*/!*<a className="list-group-item" href="/">*!/*/}
                {/*<Link to="/notifications" className="list-group-item">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col-2">*/}
                {/*            <i className="far fa-bell"></i>*/}
                {/*        </div>*/}
                {/*        <div className="col-10 d-none d-xl-block">*/}
                {/*            Notifications*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Link>*/}
                {/*/!*</a>*!/*/}
                {/*/!*<a className="list-group-item" href="/">*!/*/}
                {/*/!*    <div className="row">*!/*/}
                {/*/!*        <div className="col-2">*!/*/}
                {/*/!*            <i className="far fa-envelope"></i>*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*        <div className="col-10 d-none d-xl-block">*!/*/}
                {/*/!*            Messages*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*</a>*!/*/}
                {/*/!*<a className="list-group-item" href="/">*!/*/}
                {/*/!*    <div className="row">*!/*/}
                {/*/!*        <div className="col-2">*!/*/}
                {/*/!*            <i className="far fa-bookmark"></i>*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*        <div className="col-10 d-none d-xl-block">*!/*/}
                {/*/!*            Bookmarks*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*</a>*!/*/}
                {/*/!*<a className="list-group-item" href="/">*!/*/}
                {/*/!*    <div className="row">*!/*/}
                {/*/!*        <div className="col-2">*!/*/}
                {/*/!*            <i className="fas fa-list"></i>*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*        <div className="col-10 d-none d-xl-block">*!/*/}
                {/*/!*            Lists*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*</a>*!/*/}
                {/*/!*<a className="list-group-item" href="/">*!/*/}
                {/*/!*    <div className="row">*!/*/}
                {/*/!*        <div className="col-2">*!/*/}
                {/*/!*            <i className="far fa-user"></i>*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*        <div className="col-10 d-none d-xl-block">*!/*/}
                {/*/!*            Profile*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*</a>*!/*/}
                {/*/!*<a className="list-group-item" href="/">*!/*/}
                {/*/!*    <div className="row">*!/*/}
                {/*/!*        <div className="col-2 ps-0">*!/*/}
                {/*/!*            <span className="fa-stack fa-1x">*!/*/}
                {/*/!*                <i className="fas fa-circle fa-stack-1x"></i>*!/*/}
                {/*/!*                <i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>*!/*/}
                {/*/!*            </span>*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*        <div className="col-10 d-none d-xl-block">*!/*/}
                {/*/!*            More*!/*/}
                {/*/!*        </div>*!/*/}
                {/*/!*    </div>*!/*/}
                {/*/!*</a>*!/*/}
            </div>


    );
}
export default NavigationSidebar;