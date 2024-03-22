import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title heading="Our Program" subheading="What We Offer" />
        <Programs />
        <About />
        <Title heading="Gallery" subheading="Campus Photos" />
        <Campus />
        <Title heading="Testimonials" subheading="What Student Says" />
        <Testimonials />
        <Title heading="Contact Us" subheading="Get in Touch" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;
