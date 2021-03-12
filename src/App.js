import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Credit from "./components/Credit";
import CardList from "./components/CardList";
import CtaButton from "./components/CtaButton";
import Institutional from "./components/Institutional";
import Faq from "./components/Faq";
import "./App.scss";

import posts from "./content/posts";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <Credit />
    <CardList posts={posts} />
    <CtaButton>Abra sua conta</CtaButton>
    <Institutional />
    <Faq />
  </div>
);

export default App;
