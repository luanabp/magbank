import React from "react";
import Hero from "../components/Hero";
import Credit from "../components/Credit";
import CardList from "../components/CardList";
import CtaButton from "../components/CtaButton";
import Institutional from "../components/Institutional";
import Faq from "../components/Faq";

import posts from "../content/posts";

const Home = ({ handleClick }) => (
  <>
    <Hero />

    <Credit />
    <CardList posts={posts} />
    <CtaButton onClick={handleClick}>Abra sua conta</CtaButton>

    <Institutional />
    <Faq />
  </>
);

export default Home;
