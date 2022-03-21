import React from "react";

const PostSummaryItem = ( {
                              posts = {
                                  topic: 'Web Development',
                                  userName: 'ReactJS',
                                  time: '2h',
                                  title: 'React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs',
                                  image: 'https://ih1.redbubble.net/image.1085917622.8337/st,small,845x845-pad,1000x1000,f8f8f8.jpg'
                              }
                          }
) => {
    return(<>
        <li className="list-group list-group-item">
          <div className="list-group-item-action bg-color-black-wb" >
                    <div className="row bg-color-black-wb ">
                        <div className="col-10">
                            <h6 className="contentcol">{posts.topic}</h6>
                            <p className="fontcolor">{posts.userName} <i className="fa-solid fa-circle-check"></i> - {posts.time}</p>
                            <span className="contentcol">{posts.title}</span>
                            <p id="tweets">{posts.tweets}</p>

                        </div>
                        <div className="col-2">
                            <img className="rounded-logo img-fluid" alt="Responsive" src={posts.image} />
                        </div>
                    </div>
                </div>

        </li></>);
}
export default PostSummaryItem;