import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Credit from "./components/Credit";
import CardList from "./components/CardList";
import CtaButton from "./components/CtaButton";
import Institutional from "./components/Institutional";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import AccountModal from "./components/AccountModal";
import "./App.scss";

import posts from "./content/posts";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
      <Navbar handleCreateAcc={() => setShowModal(true)} />
      <Hero />
      <Credit />
      <CardList posts={posts} />
      <CtaButton onClick={() => setShowModal(true)}>Abra sua conta</CtaButton>
      <Institutional />
      <Faq />
      <Footer />
      <AccountModal show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default App;
