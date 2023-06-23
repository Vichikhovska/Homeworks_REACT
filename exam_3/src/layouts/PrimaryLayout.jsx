import React from "react";

//containers
import Header from "../containers/Header";
import Footer from "../containers/Footer";

//styles
import "../styles/layouts/primary-layout.scss"

function PrimaryLayout({children}) {
  return(
    <div className="mrvl-primary-layout">
      <Header />
      <main className="mrvl-primary-layout_content">
        {children}
      </main>
      <Footer />
    </div>
  )
};

export default PrimaryLayout;