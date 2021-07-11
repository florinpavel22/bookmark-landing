import Container from "./subcomponents/Container";
import Button from "./subcomponents/Button";
import altLogo from "../img/logo-bookmark-white.svg";
import hamburgerIcon from "../img/icon-hamburger.svg";
import closeIcon from "../img/icon-close.svg";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import "../styles/mobilemenu.css";
import { useState } from "react";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  return (
    <div className="mobile-menu">
      <img
        onClick={() => setActive(!active)}
        src={hamburgerIcon}
        alt="Hamburger Menu"
        className="hamburger"
      />

      <div className={`slider-wrapper ${active ? "active" : ""}`}>
        <Container>
          <div className="slider-top">
            <div className="slider-header">
              <img src={altLogo} alt="Company Logo" />
              <div onClick={() => setActive(!active)} className="close-btn">
                <img src={closeIcon} alt="Close Menu" />
              </div>
            </div>

            <ul className="slider-menu">
              <li>Features</li>
              <li>Pricing</li>
              <li>Contact</li>
              <li>
                <Button text="Login" primary={false} />
              </li>
            </ul>
          </div>

          <div className="social-media">
            <img src={facebook} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MobileMenu;
