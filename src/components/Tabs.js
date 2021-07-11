import TabContent from "./TabContent";
import { useState } from "react";
import "../styles/tabs.css";
import tab1Img from "../img/illustration-features-tab-1.svg";
import tab2Img from "../img/illustration-features-tab-2.svg";
import tab3Img from "../img/illustration-features-tab-3.svg";

const Tabs = () => {
  const [active, setActive] = useState(0);

  const tabs = [
    {
      title: "Simple Bookmarking",
      header: "Bookmark in one click",
      body: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.",
      img: tab1Img,
    },
    {
      title: "Speedy Searching",
      header: "Intelligent search",
      body: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
      img: tab2Img,
    },
    {
      title: "Easy Sharing",
      header: "Share your bookmarks",
      body: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
      img: tab3Img,
    },
  ];

  return (
    <>
      <ul className="tabs">
        {tabs.map((tab, index) => (
          <li className={active === index ? 'active-tab' : ''} key={index} onClick={() => setActive(index)}>
            {tab.title}
          </li>
        ))}
      </ul>

      <TabContent tabs={tabs} active={active} />
    </>
  );
};

export default Tabs;
