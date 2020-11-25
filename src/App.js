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
        <Route path="/">
           <Header/>
           <Body />
           <Footer/>
        </Route>
        <Route path="/tours">
           <Header/>
           <Tours />
        </Route>
        <Route path="/destination">
           <Header/>
           <Destination />

        </Route>
        <Route path="/about-us">
           <Header/>
           <About />
        </Route>
        <Route path="/gallery">
           <Header/>
           <Gallery />
        </Route>
      </Switch>
      

      {/* image */}
      
      {/* footer */}
      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
