import NavigationSidebar from "../NavigationSidebar/index.js";
import PostItem from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList";
import PostList from "../PostList/index.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar()}
        </div>
        
        <!--main-->
        <div class="col-6 mb-lg-9">
            
            <!--content-->
            <div class="list-group" >
            ${PostList()}
            

            </div>
            
            <!--content end-->
        </div>
        
         
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 col-4" >
        <input class="form-control form-rounded account-bg-color mb-lg-3" style="font-family:Arial, FontAwesome" placeholder="&#xF002 Search Tuiter" type="text"/>
            ${PostSummaryList()}
        </div>

        
        </div>
    `);
})($);
