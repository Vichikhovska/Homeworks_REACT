import React from "react";

//containers
import Header from "../containers/Header";
import Baner from "../containers/Baner";
import SectionMap from "../containers/SectionMap";

//styles
import "../styles/layouts/secondary-layout.scss"

function SecondaryLayout({children}) {
  return(
    <div className="mrvl-secondary-layout">
      <Header/>
      <Baner />
      <main className="mrvl-secondary-layout_content">
        {children}
      </main>
      <SectionMap/>
    </div>
  )
};

export default SecondaryLayout;
