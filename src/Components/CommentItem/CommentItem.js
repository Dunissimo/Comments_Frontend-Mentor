import React from "react";

import "./CommenItem.css";

const CommentItem = ({ comments, isReply }) => {
  const {
    score = "0",
    user = false,
    createdAt = "date not found",
    content = "content not found",
    replies = [],
  } = comments;

  const renderReplies = () => {
    const toRender = [];

    replies.forEach((_, index) =>
      toRender.push(
        <CommentItem
          comments={comments.replies[index]}
          isReply={true}
          key={index}
        />
      )
    );

    return toRender;
  };

  return (
    <div className="commentItem">
      <div className="comment">
        <div className="score">
          <button>+</button>
          <span>{score}</span>
          <button>-</button>
        </div>
        <div className="comment__body">
          <div className="comment__top">
            <img src={user.image ? user.image.png : ""} alt="avatar" />
            <span className="username">
              {user ? user.username : "username not found"}
            </span>
            <span className="date">{createdAt}</span>
          </div>
          {/* <div className="comment__text">
            {isReply
              ? <span className="replyTo">${comments.replyingTo}</span> 
              : content}
          </div> */}
          {isReply ? (
            <div className="comment__text">
              <span className="replyingTo">@{comments.replyingTo},</span>
              <p>{content}</p>
            </div>
          ) : (
            <div className="comment__text">
              <p>{content}</p>
            </div>
          )}
          <button className="reply">Reply</button>
        </div>
      </div>
      {replies.length < 1 ? (
        ""
      ) : (
        <div className="replies">{renderReplies()}</div>
      )}
    </div>
  );
};

// const ReplyToComment = ({ comments }) => {
//   const {
//     score = "0",
//     user = false,
//     createdAt = "date not found",
//     content = "content not found",
//     // replies = [],
//   } = comments;

//   return (
//     <div className="commentItem">
//       <div className="comment">
//         <div className="score">
//           <button>+</button>
//           <span>{score}</span>
//           <button>-</button>
//         </div>
//         <div className="comment__body">
//           <div className="comment__top">
//             <img src={user.image ? user.image.png : ""} alt="avatar" />
//             <span className="username">
//               {user ? user.username : "username not found"}
//             </span>
//             <span className="date">{createdAt}</span>
//           </div>
//           <div className="comment__text">{content}</div>
//           <button className="reply">Reply</button>
//         </div>
//       </div>
//       <div className="replies"></div>
//     </div>
//   );
// };

export default CommentItem;
