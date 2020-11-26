import React from 'react';
import './App.css';
import Body from './Body';
// import Footer from './Footer';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './Header';
import Tours from './Tours';
import Destination from './Destination';
import About from './About';
import Gallery from './Gallery';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/tours">
           <Header />
           <Tours />
           <Footer />
        </Route>
        <Route path="/destinations">
           <Header />
           <Destination />
           <Footer />
         </Route>
        <Route path="/about-us">
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
           <Body />
           <Footer />
        </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
