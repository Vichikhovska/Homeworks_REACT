import React from "react";

function SecondaryLayout({children}) {
  return(
    <div>
      <header></header>
      <main>
        {children}
      </main>
      <div>
        map
      </div>
    </div>
  )
};

export default SecondaryLayout;