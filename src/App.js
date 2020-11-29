import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import About from "./Pages/About";
import Destinations from "./Pages/Destinations";
import Gallery from "./Pages/Gallery";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Tours from "./Pages/Tours";

function App() {
  return (
    <Router >
    <div className="app">
      <Switch>

        <Route path="/tours">
          <Header />
          <Tours />
          <Footer />
        </Route>

        <Route path="/destinations">
          <Header />
          <Destinations />
          <Footer />
        </Route>

        <Route path="/services">
          <Header />
          <Services />
          <Footer />
        </Route>

        <Route path="/about">
          <Header />
          <About />
          <Footer />
        </Route>

        <Route path="/gallery">
          <Header /> 
          <Gallery />
          <Footer />
        </Route>

        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
