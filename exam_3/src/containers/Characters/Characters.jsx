import React from "react";

//components
import Button from "../../components/Button/Button";

//styles
import "../../styles/containers/characters.scss";

function Characters () {
  const handleButtonClick = () => {
    window.location.href = "/characters";
  };

  return (
    <section className="mrvl-section-characters">
      <div className="mrvl-section-characters_parent">
        <div className="mrvl-section-characters_parent_info">
          <h1 className="mrvl-section-characters_parent_info_title">Characters</h1>
          <p className="mrvl-section-characters_parent_info_text">
            Marvel characters are beloved by fans around the world. From the mighty Avengers to the friendly neighborhood Spider-Man, Marvel has brought to life a diverse and exciting universe of heroes and villains. With their extraordinary powers, thrilling adventures, and relatable stories, Marvel characters have captured the imaginations of people of all ages. 
          </p>
        </div>
        <div className="mrvl-section-characters_parent_description">
          <p className="mrvl-section-characters_parent_description_text">
            Whether you're a fan of Iron Man's genius intellect, Captain America's unwavering courage, or the cosmic adventures of the Guardians of the Galaxy, there's a Marvel character for everyone. Join the Marvel universe and embark on an epic journey filled with action, drama, and unforgettable characters.
          </p>
          <Button  className="mrvl-main-button" text="Characters" onClick={handleButtonClick} />
        </div>
      </div>
    </section>
  );
}

export default Characters;