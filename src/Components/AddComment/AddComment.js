import React from "react";

import "./AddComment.css";
// import {currentUser} from '../../data.json';
// const src = `../../images/avatars/image-${currentUser.username}.png`

// import avatar from `${}`;

const AddComment = ({ currentUser }) => {
  return (
    <div className="AddComment">
      <div className="container">
        <div className="AddComment__body">
          <img src={currentUser.image.png} alt="avatar" />
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
