import Button from "./subcomponents/Button";
import "../styles/subscribe.css";
import { useState } from "react";

const Subscribe = () => {
  const [value, setValue] = useState("");

  return (
    <div className="subscribe">
      <h5>35,000+ already joined</h5>
      <h3 className="inner-header">Stay up-to-date with what we're doing</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="text"
          placeholder="Enter your email address"
        />
        <Button text="Contact Us" primary={false} />
      </form>
    </div>
  );
};

export default Subscribe;
