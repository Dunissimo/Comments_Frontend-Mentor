import React from "react";

import "./App.css";
import data from "./data.json";

import AddComment from "./Components/AddComment/AddComment";
import CommentsList from "./Components/CommentsList/CommentsList";

const App = () => {
  return (
    <div className="App">
      <CommentsList data={data} />
      <AddComment currentUser={data.currentUser} />
    </div>
  );
};

export default App;
