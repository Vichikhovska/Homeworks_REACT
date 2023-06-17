import React from "react";

// containers
import Header from "./containers/Header/Header";
import Baner from "./containers/Baner/Baner";
import Blog from "./containers/Blog/Blog";
import News from "./containers/News/News";


function App() {
  return (
    <div className="parent">
      <Header/>
      <Baner/>
      <div className="parent_section">
        <Blog/>
        <News/>
      </div>
    </div>
  );
}

export default App;
