import Button from "./subcomponents/Button";
import { useState } from "react";
import "../styles/accordion.css";
import arrow from '../img/icon-arrow.svg';

const Accordion = () => {
  const [active, setActive] = useState(null);

  const clickHandler = (index) => {
    if (active === index) {
      setActive(null);
      return;
    }

    setActive(index);
  };

  const faqs = [
    {
      title: "What is Bookmark?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus ullam nemo consequuntur assumenda et, enim quod voluptates ut, voluptate pariatur eius!",
    },
    {
      title: "How can I request a new browser?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officiis praesentium quis inventore necessitatibus ea, similique, dicta quas tenetur accusantium magni, mollitia distinctio voluptatibus.",
    },
    {
      title: "Is there a mobile app?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, sunt enim. Quo quaerat maiores magnam sequi!",
    },
    {
      title: "What about other Chromium browsers?",
      answer:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptatem reiciendis dolorum libero magni modi, at officiis animi accusantium!",
    },
  ];
  return (
    <div className="accordion">
      <div className="questions">
        {faqs.map((question, index) => (
          <div className="question" key={index}>
            <div
              className={active === index ? "question-header active" : "question-header"}
              onClick={() => clickHandler(index)}>
              <h4>{question.title}</h4>
              <img src={arrow} alt="Arrow icon" className="arrow" />
            </div>
            <p className={active === index ? "active" : ""}>
              {question.answer}
            </p>
          </div>
        ))}
      </div>

      <Button text="More info" primary={true} />
    </div>
  );
};

export default Accordion;
