import React from "react";

//components
import Button from "../../components/Button/Button";

//styles
import "../../styles/containers/comics.scss";

function Comics () {
  const handleButtonClick = () => {
    window.location.href = "/comics";
  };

  return (
    <section className="mrvl-section-comics">
      <div className="mrvl-section-comics_parent">
        <div className="mrvl-section-comics_parent_info">
          <h1 className="mrvl-section-comics_parent_info_title">Comics</h1>
          <p className="mrvl-section-comics_parent_info_text">
            Comics have been a source of inspiration and entertainment for decades. With their vibrant illustrations and captivating storytelling, comics have transported readers to extraordinary worlds filled with superheroes, supervillains, and epic battles between good and evil.
          </p>
        </div>
        <div className="mrvl-section-comics_parent_description">
          <p className="mrvl-section-comics_parent_description_text">
            From iconic characters like Superman, Batman, and Wonder Woman in DC Comics to the legendary heroes of Marvel Comics, such as Spider-Man, Hulk, and the X-Men, comics have created a rich tapestry of unforgettable characters and stories. Dive into the pages of comics and let your imagination soar alongside these larger-than-life heroes.
          </p>
          <Button  className="mrvl-main-button" text="Comics" onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
}

export default Comics;