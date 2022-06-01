import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Token from "./components/Token";
import ByeAndSellButtons from "./components/byeAndSellButtons";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <div className="buttonsWrapp">
        <ByeAndSellButtons title={'Купить'} />
        <ByeAndSellButtons title={'Продать'} />
      </div>
      <Features data={landingPageData.Features} />
      <Token />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} contacts={landingPageData.Contact} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
