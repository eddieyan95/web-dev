import React from "react";

const PostItem = ( {po={
    avatarIcon: "data:image/png;base64,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",
    userName: "New York Post",
                       handle: "nypost",
                       time: "23h" ,
                       content:
                           "Grimes seen reading Karl Marx following split with world richest man Elon Musk",
                       comment:"965",
                       retweet:"2.4k",
                       like:"4k",
                       postPhoto:"https://i.kym-cdn.com/entries/icons/original/000/038/470/grimesreadingheader.jpg",
                       textTitle:"Lorem",
                       textContent:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
}
                   }
) => {
    return(
        <>
        <li className="nodot">
            <div className="row pt-1">
                <div className="col-1">
                    <img alt="Responsive image" className="rounded-circle img-fluid"
                         src={po.avatarIcon} />
                </div>



                <div className="col-11">
                    <h7>{po.userName} <i className="fa-solid fa-circle-check"></i></h7>
                     @{po.handle} - {po.time}
                    <p>{po.content}</p>

                    <div className="border border-lightgrey rounded">
                        <div>
                            <img className="img-fluid image" src={po.postPhoto}/>
                                <div className="mt-3 border-top:solid grey">
                                    <h7 className="ps-lg-3">{po.textTitle}</h7>

                                    <p className="ps-lg-3">{po.textContent} </p>
                                </div>

                        </div>




                    </div>
                    <div className="row pt-lg-3">
                        <div className="col-3 "><a className="linkcolor text-decoration-none"
                                                   href="#"><i
                            className="fa-solid fa-comment"></i> {po.comment}</a></div>
                        <div className="col-3 "><a className="linkcolor text-decoration-none"
                                                   href="#"><i
                            className="fa-solid fa-retweet"></i> {po.retweet}</a></div>
                        <div className="col-3"><a className="heartcolor text-decoration-none"
                                                  href="#"><i
                            className="fa-solid fa-heart"></i> {po.like}</a></div>
                        <div className="col-3"><a className="linkcolor text-decoration-none"
                                                  href="#"><i
                            className="fa-solid fa-share-from-square"></i></a></div>
                    </div>
                </div>
            </div>



        </li>
        </>);
}
export default PostItem;

