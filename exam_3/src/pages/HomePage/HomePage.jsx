import React from "react";

//containers
import Characters from "../../containers/Characters/Characters";
import Comics from "../../containers/Comics/Comics";
import Movies from "../../containers/Series/Series";

//styles
import "../../styles/pages/home-page.scss";

function HomePage() {
  return (
    <section className="mrvl-sections">
      <Characters/>
      <Comics/>
      <Movies/>
    </section>
  );
}

export default HomePage;
