import React from "react";

// containers
import Header from "./containers/Header";
import ToDoList from "./containers/ToDoList";


function App() {
  return (
    <div className="parent">
      <Header/>
      <ToDoList/>
    </div>
  );
}

export default App;
