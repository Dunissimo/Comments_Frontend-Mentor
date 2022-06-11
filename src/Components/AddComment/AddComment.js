import React from "react";

import "./AddComment.css";
import avatar from "../../images/avatars/image-juliusomo.png";

const AddComment = () => {
  return (
    <div className="AddComment">
      <div className="container">
        <div className="AddComment__body">
          <img src={avatar} alt="avatar" />
          <form onClick={(e) => e.preventDefault()}>
            <textarea placeholder="Add a comment..."></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddComment;
