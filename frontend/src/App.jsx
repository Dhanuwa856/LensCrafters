import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import Hero from "./Components/Hero/Hero";
import Gallery from "./Components/Gallery/Gallery";
import PhotographyTip from "./Components/PhotographyTip/PhotographyTip";
import PhotographyGear from "./Components/PhotographyGear/PhotographyGear";
import Footer from "./Components/Footer/Footer";
import MiniTitle from "./Components/MiniTitle/MiniTitle";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <MiniTitle MiniTitle="Discover Stunning Imagery" />
      <Gallery />
      <MiniTitle MiniTitle="Master Your Craft: Photography Tips" />
      <PhotographyTip />
      <MiniTitle MiniTitle="Equip Your Journey: Photography Gear Essentials" />
      <PhotographyGear />
      <Footer />
    </>
  );
};

export default App;
