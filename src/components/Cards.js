import Card from "./Card";
import Container from "./subcomponents/Container";
import chrome from "../img/logo-chrome.svg";
import firefox from "../img/logo-firefox.svg";
import opera from "../img/logo-opera.svg";
import "../styles/cards.css";

const Cards = () => {
  const cards = [
    {
      header: "Add to Chrome",
      subheader: "Minimum version 6.2",
      logo: chrome,
    },
    {
      header: "Add to Firefox",
      subheader: "Minimum version 5.5",
      logo: firefox,
    },
    {
      header: "Add to Opera",
      subheader: "Minimum version 4.6",
      logo: opera,
    },
  ];

  return (
    <Container>
      <div className="cards">
        <Card contents={cards[0]} />
        <Card contents={cards[1]} />
        <Card contents={cards[2]} />
      </div>
    </Container>
  );
};

export default Cards;
