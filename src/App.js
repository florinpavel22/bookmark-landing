import Header from "./components/Header";
import LandingInfo from "./components/LandingInfo";
import InnerSection from "./components/InnerSection";
import Tabs from "./components/Tabs";
import Cards from "./components/Cards";
import Accordion from "./components/Accordion";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";

const App = () => {
  const sections = [
    {
      title: "Features",
      content:
        "Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.",
    },
    {
      title: "Download the extension",
      content:
        "We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to prioritize.",
    },
    {
      title: "Frequently Asked Questions",
      content:
        "Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.",
    },
  ];
  return (
    <>
      <Header />
      <LandingInfo />
      <InnerSection contents={sections[0]}>
        <Tabs />
      </InnerSection>
      <InnerSection contents={sections[1]}>
        <Cards />
      </InnerSection>
      <InnerSection contents={sections[2]}>
        <Accordion />
      </InnerSection>
      <Subscribe />
      <Footer />
    </>
  );
};

export default App;
