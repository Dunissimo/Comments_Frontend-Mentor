import React from "react";
import CommentItem from "../CommentItem/CommentItem";

import "./CommentsList.css";
// import avatar from "../../images/avatars/image-amyrobson.png";

const CommentsList = ({ data }) => {
  const toRender = [];

  data.comments.forEach((_, i) => {
    toRender.push(
      <CommentItem comments={data.comments[i]} isReply={false} key={i} />
    );
  });
  return (
    <div className="CommentsList">
      <div className="container">
        {toRender}
        {/* <div className="comment">
              <div className="score">
                <button>+</button>
                <span>12</span>
                <button>-</button>
              </div>
              <div className="comment__body">
                <div className="comment__top">
                  <img src={"avatar"} alt="avatar" />
                  <span className="username">Dunissimo</span>
                  <span className="date">2 days ago</span>
                </div>
                <div className="comment__text">
                  Impressive! Though it seems the drag feature could be
                  improved. But overall it looks incredible. You've nailed the
                  design and the responsiveness at various breakpoints works
                  really well.
                </div>
                <button className="reply">Reply</button>
              </div>
            </div>
            <div className="comment">
              <div className="score">
                <button>+</button>
                <span>12</span>
                <button>-</button>
              </div>
              <div className="comment__body">
                <div className="comment__top">
                  <img src={"avatar"} alt="avatar" />
                  <span className="username">Dunissimo</span>
                  <span className="date">2 days ago</span>
                </div>
                <div className="comment__text">
                  Impressive! Though it seems the drag feature could be
                  improved. But overall it looks incredible. You've nailed the
                  design and the responsiveness at various breakpoints works
                  really well.
                </div>
                <button className="reply">Reply</button>
              </div>
            </div> */}
      </div>
    </div>
  );
};

export default CommentsList;
