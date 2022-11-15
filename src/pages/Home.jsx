import React from "react";

import {
  OurTeam,
  HeroBanner,
  OurServices,
  About,
  Booking,
  Nav,
} from "../components";

const Home = () => {
  return (
    <>
      <Nav />
      <HeroBanner />
      <About />
      <OurServices />
      <OurTeam />
      <Booking />
    </>
  );
};

export default Home;
