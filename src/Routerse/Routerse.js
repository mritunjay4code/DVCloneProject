import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Exhibitor from "../components/Exhibitor";
import Visitor from "../components/Visitor";
import Contact from "../components/Contact";
import Exhibit from "../components/Exhibit";

const Routerse = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Exhibitor" element={<Exhibitor />} />
      <Route path="/Exhibit" element={<Exhibit />} />
      <Route path="/Visitor" element={<Visitor />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default Routerse;
