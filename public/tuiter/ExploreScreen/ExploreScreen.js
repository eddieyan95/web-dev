import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        
        <!--main-->
        <div class="col-6">
        <div class="row ps-sm-2">
                <div class="col-11">
                    <input class="form-control form-rounded account-bg-color" style="font-family:Arial, FontAwesome" placeholder="&#xF002 Search Tuiter" type="text"/>
                </div>


                <div class="col-1 pt-sm-2">
                    <a href="#"><i class="fa-solid fa-gear iconsize setting"></i></a>
                </div>

            </div>

            <!--Navigation Tab-->
            <div class="mt-3">
                <ul class="nav mb-2 nav-tabs">
                    <li class="nav-item ">
                        <a class="nav-link contentcol" href="#" >For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contentcol" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contentcol" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link contentcol" href="#">Sports</a>
                    </li>
                    <div class="tab-content">
                    <li class="nav-item">
                        <a class="nav-link  hidden-md hidden-sm hidden-xs tabhightlight tab-content nav-tabs  " href="#">Entertainment</a>
                    </li></div>

                </ul>
            </div>
            <!--Navigation Tab End-->

            <!--Picture Tab-->
            <div class="thumbnail">
                <img src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg" class="img-fluid " alt="Responsive image">
                <div class="caption">
                    <P class="tabhightlight">SpaceX's Starship</P>

                </div>
            </div>
            <!--Picture end-->
            
            <!--content-->
            <div class="list-group" >
            ${PostSummaryList()}

            </div>
            
            <!--content end-->
        
        
        </div>
        
         
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-4 nodot" >
            <h6>Who to follow</h6>
            ${WhoToFollowList()}
        </div>

        
        </div>
    `);
})($);
