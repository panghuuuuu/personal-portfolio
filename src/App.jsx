import React from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Experience from "./components/Experience";
import Skills from "./components/Skills";

import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Experience />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
