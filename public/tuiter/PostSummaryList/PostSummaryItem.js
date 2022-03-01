const PostSummaryItem = (post) => {
    return(`
        <li class="nodot">
          <div className=" list-group list-group-item list-group-item-action bg-color-black-wb" >
                    <div class="row bg-color-black-wb ">
                        <div class="col-10">
                            <h6 class="contentcol">${post.topic}</h6>
                            <p class="fontcolor">${post.userName} <i class="fa-solid fa-circle-check"></i> - ${post.time}</p>
                            <span class="contentcol">${post.title}</span>
                            <p id="tweets">${post.tweets}</p></script>
                            <script>
                            if (document.getElementById("tweets").innerHTML==="undefined") {
                             document.getElementById("tweets").innerHTML=""
                            }
                            </script>
                        </div>
                        <div class="col-2">
                            <img class="rounded-logo img-fluid" alt="Responsive" src=${post.image} />
                        </div>
                    </div>
                </div>
         
        </li>`);
}
export default PostSummaryItem;