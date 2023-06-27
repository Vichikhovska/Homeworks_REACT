import React from "react";

//containers
import Header from "../containers/Header";
import Footer from "../containers/Footer";

//styles
import "../styles/layouts/simple-layout.scss";


function SimpleLayout({children}) {
  return(
    <div className="mrvl-simple-layout">
      <Header />
      <main className="mrvl-simple-layout_content">
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default SimpleLayout;