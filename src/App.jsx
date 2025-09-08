import React from "react";
import SubHeader from "./components/SubHeader";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Toys from "./components/Toys";
import { stuffed, wooden } from "./static";
import Webflow from "./components/Webflow";

const App = () => {
  return (
    <>
      <SubHeader />
      <Header />
      <main>
        <Hero />
        <Category />
        <Toys type={stuffed} title="Stuffed" />
        <Toys type={wooden} title="Wooden" />
        <Webflow />
      </main>
      <Footer />
    </>
  );
};

export default App;
