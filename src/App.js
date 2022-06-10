import React from "react";

import "./App.css";
import AddComment from "./Components/AddComment/AddComment";
import CommentsList from "./Components/CommentsList/CommentsList";

const App = () => {
  return (
    <div className="App">
      <CommentsList />
      <AddComment />
    </div>
  );
};

export default App;
