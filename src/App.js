import react, { useEffect } from "react";
import "./App.scss";

import Header from "./components/header/header.component";
import Banner from "./sections/banner/banner.component";
import Services from "./sections/services/services.component";
import About from "./sections/about/about.component";
import Reference from "./sections/reference/reference.component";
import Contact from "./sections/contact/contact.component";
import Footer from "./sections/footer/footer.component";

import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-H90Q0MJYH1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Header />
      <section id="home">
        <Banner />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>

      <section id="references">
        <Reference />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  );
}

export default App;
