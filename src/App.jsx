import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Experience />
      <Skills />
      <Works />
      <Contact />
      <Nav />
      <Footer />
    </div>
  );
};

export default App;
