import React from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Information } from "../../components/Information";
import { ExploreGroupHotel } from "../../components/ExploreGroupHotel";
import { ExploreHotel } from "../../components/ExploreHotel";
import { About } from "../../components/About";
import { Brand } from "../../components/Brand";
import { RegisterMember } from "../../components/RegisterMember";

export const HomePage = () => {
  return (
    <div>
      <Header />
      <Information />
      <ExploreGroupHotel />
      <ExploreHotel />
      <About />
      <Brand />
      <RegisterMember />
      <Footer />
    </div>
  );
};
