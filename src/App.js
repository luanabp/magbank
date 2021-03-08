import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Credit from "./components/Credit";
import CardList from "./components/CardList";
import CtaButton from "./components/CtaButton";
import "./App.scss";

import posts from "./content/posts";

const App = () => (
  <div className="App">
    <Navbar />
    <Hero />
    <Credit />
    <CardList posts={posts} />
    <CtaButton>Abra sua conta</CtaButton>
  </div>
);

export default App;
