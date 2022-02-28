const WhoToFollowListItem = (who) => {
    return(`
        <li class="nodot">
        <div class="row pt-1">
        <div class="col-3">
         <img alt="Responsive image" class="rounded-circle img-fluid"
               src=${who.avatarIcon  } /></div>
         <div class="col-5">
            <h7>${who.userName} <i class="fa-solid fa-circle-check"></i></h7>
            <p>@${who.handle}</p>
         </div>
         
         <div class="col-4">
           <button class="btn btn-primary rounded-pill">Follow</button>
         </div>
         
         </div>
         
        </li>`);
}
export default WhoToFollowListItem;

