import React from "react";
import Dashboard from "../components/Dashboard";
import Container from "../components/Container";
import AboutMe from "../components/AboutMe";
import Specilization from "../components/Specilization";
import Concerns from "../components/Concerns";
import Experiences from "../components/Experiences";
import Reviews from "../components/Reviews";
import Appointment from "../components/Appointment";

const Home = () => {
  return (
    <>
      <Dashboard />
      <Container
        Style={{
          display: "flex",
        }}
      >
        <div className="w-[50%] flex flex-col gap-10 pr-8">
          <AboutMe />
          <Specilization />
          <Concerns />
          <Experiences />
          <Reviews />
        </div>
        <div className="w-[50%] pl-8">
          <Appointment />
        </div>
      </Container>
    </>
  );
};

export default Home;
