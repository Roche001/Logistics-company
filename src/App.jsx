import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Logistics from "./components/logistics/Logistics";
import Career from "./components/career/Career";
import Team from "./components/team/Team";
import Price from "./components/price/Price";
import Location from "./components/location/Location";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/Logistics" exact element={<Logistics />} />
          <Route path="/Career" exact element={<Career />} />
          <Route path="/Team" exact element={<Team />} />
          <Route path="/Price" exact element={<Price />} />
          <Route path="/Location" exact element={<Location />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
