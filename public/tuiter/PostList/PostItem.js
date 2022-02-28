const PostItem = (po) => {
    return(`
        <li class="nodot">
            <div class="row pt-1">
                <div class="col-1">
                 <img alt="Responsive image" class="rounded-circle img-fluid"src=${po.avatarIcon  } />
            </div><!--Profile Pic-->
            
            
                <div class="col-11">
                  <h7>${po.userName}  <i class="fa-solid fa-circle-check"></i></h7> @${po.handle} - ${po.time}
                  <p>${po.content}</p><!--PostDetial-->
                  
                  <div class="border border-lightgrey rounded">
                  <div>
                 <img class="img-fluid image" src=${po.postPhoto}>
                 <div class="mt-3 border-top:solid grey">
                    <h7 class="ps-lg-3">${po.textTitle}</h7>
                    
                    <p  class="ps-lg-3">${po.textContent} </p>
                 </div>
                  
                  </div><!--Picture and content-->
            
            
              
               
          
      
      
     
               
       
           </div>
           <div class="row pt-lg-3" ><!--Like and retweet-->
                     <div class="col-3 "><a class="linkcolor text-decoration-none" href="#"><i class="fa-solid fa-comment"></i> ${po.comment}</a></div>
                     <div class="col-3 "><a class="linkcolor text-decoration-none" href="#"><i class="fa-solid fa-retweet"></i> ${po.retweet}</a></div>
                     <div class="col-3"><a class="heartcolor text-decoration-none" href="#"><i class="fa-solid fa-heart"></i> ${po.like}</a></div>
                     <div class="col-3"><a class="linkcolor text-decoration-none" href="#"><i class="fa-solid fa-share-from-square"></i></a></div>
               </div><!--Like-->
       
      </li>`);
}
export default PostItem;

