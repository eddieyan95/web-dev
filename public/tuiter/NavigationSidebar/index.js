const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-brands fa-twitter"></i></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="../HomeScreen/home.html"><i class="fa-solid fa-house-chimney"></i><span class="hidden-md hidden-sm hidden-xs ">  Home</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol"  href="../ExploreScreen/explore.html"><i class="fa-solid fa-hashtag" ></i><span class="hidden-md hidden-sm hidden-xs ">  Explore</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-bell"></i><span class="hidden-md hidden-sm hidden-xs ">  Notifications</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-envelope"></i><span class="hidden-md hidden-sm hidden-xs ">  Messages</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-bookmark"></i><span class="hidden-md hidden-sm hidden-xs ">  Bookmarks</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-list"></i><span class="hidden-md hidden-sm hidden-xs ">  List</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-user"></i><span class="hidden-md hidden-sm hidden-xs ">  Profile</span></a>
                <a class="list-group-item list-group-item-action bg-color-black contentcol" href="#"><i class="fa-solid fa-circle-info"></i><span class="hidden-md hidden-sm hidden-xs ">  More</span></a>
            <!-- continue the rest of the list -->
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;

