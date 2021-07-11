import Button from "./subcomponents/Button";
import Container from "./subcomponents/Container";
import hero from "../img/illustration-hero.svg";
import "../styles/landing_info.css";

const LandingInfo = () => {
  return (
    <Container>
      <div className="landing-info">
        <div className="landing-text">
          <h2>A simple Bookmark Manager</h2>
          <div className="brief-desc">
            A clean and simple interface to organize your favorite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </div>
          <div className="download">
            <Button text="Get it on Chrome" primary={true} />
            <Button text="Get it on Firefox" primary={false} />
          </div>
        </div>

        <img src={hero} alt="Illustration Hero" />
      </div>
    </Container>
  );
};

export default LandingInfo;
