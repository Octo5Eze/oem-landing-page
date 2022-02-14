import React, { Component } from "react";

import { useState, useEffect } from "react";

import { HashRouter, Route, Switch } from "react-router-dom";

import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Privacy } from "./components/Privacy";
import { Contact } from "./components/contact";
import { Footer } from "./components/Footer";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const Home = () => {
    return (
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
       {/*  <Features data={landingPageData.Features} /> */}
        <About data={landingPageData.About} />
        {/* <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} /> */}
       {/*  <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} /> */}
        <Contact data={landingPageData.Contact} />
        <Footer />
      </div>
    );
  };


   const AboutPage = () => {
     return (
       <div>
         <Navigation />
        
         <Privacy />
        
         
         <Footer />
         
         
       </div>
     );
   };

  return (
    <HashRouter>
      <React.Suspense
        fallback={() => {
          "loading...";
        }}
      >
        <Switch>
          <Route
            // exact
            path="/privacy"
            name="Login Page"
            render={(props) => <AboutPage {...props} />}
          />

          <Route path="/" name="Home" render={(props) => <Home />} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};

export default App;
