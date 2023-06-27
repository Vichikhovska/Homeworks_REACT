import React from "react";
import { Link } from "react-router-dom";

//helpers
import { FOOTER_INFO_LINKS } from "./constants";
import { FOOTER_ABOUT_COMPANIES_LINKS } from "./constants";
import { FOOTER_SOCIAL_MEDIA_LINKS } from "./constants";
import { FOOTER_DIFFERENT_LINKS } from "./constants";

//styles
import "../../styles/containers/footer.scss";


function Footer() {
  return (
    <footer className="mrvl-footer">
      <div className="mrvl-footer_section">
        <div className="mrvl-footer_section_logo">
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 500 200">
              <path fill="#f0141e" d="M0 0h500v200H0z" />
              <path d="M423.12 46.619V15.991h-85.706l-14.11 102.282-13.94-102.282h-30.908l3.454 27.312c-3.563-7-16.211-27.312-44.061-27.312-.185-.012-30.945 0-30.945 0l-.128 149.084-22.523-149.084-40.484-.012-23.304 154.467.013-154.455H81.726l-13.965 86.768-13.604-86.768H15.399v167.932h30.523v-80.944l13.886 80.944h16.224l13.69-80.944v80.944h58.838l3.558-25.83h23.688l3.558 25.83 57.771.037h.042v-.037H237.249v-54.504l7.074-1.024 14.661 55.565h29.883l-.012-.037H288.94l-19.238-65.11c9.741-7.179 20.752-25.379 17.822-42.798v-.006c.036.226 18.164 108.026 18.164 108.026l35.534-.11 24.279-152.203v152.203h57.617v-30.199h-27.344v-38.507h27.344v-30.66h-27.344v-37.94h27.346zM155.713 131.47l8.387-71.802 8.69 71.802h-17.077zm88.708-33.155c-2.344 1.123-4.784 1.685-7.172 1.691v-54.01c.037 0 .093-.006.153-.006 2.38-.018 20.203.714 20.203 26.709 0 13.598-6.06 22.174-13.184 25.616zm240.186 55.383v30.188h-56.214V15.967h30.272v137.731h25.942z" fill="#fff" />
            </svg>
          </Link>
        </div>
        <div className="mrvl-footer_section_info">
          {FOOTER_INFO_LINKS.map((link, index) => (
            <Link key={`${index}-${link.label}`} to={link.value} className="mrvl-footer_section_info_content">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mrvl-footer_section_info">
          {FOOTER_ABOUT_COMPANIES_LINKS.map((link, index) => (
            <Link key={`${index}-${link.label}`} to={link.value} className="mrvl-footer_section_info_content">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mrvl-footer_section_info">
          {FOOTER_SOCIAL_MEDIA_LINKS.map((link, index) => (
            <a
              className="mrvl-footer_section_info_content"
              key={`${index}-${link.label}`}
              href={link.value}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mrvl-footer_different">
        {FOOTER_DIFFERENT_LINKS.map((link, index) => (
          <Link key={`${index}-${link.label}`} to={link.value} className="mrvl-footer_different_text">
            {link.label}
          </Link>
        ))}
        <span className="span">©2023 MARVEL</span>
      </div>
    </footer>
  );
};

export default Footer;
