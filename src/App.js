import React from 'react';
import './App.css';
import {Switch, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './pages/home/home.page'
import Portfolio from './pages/portfolio/portfolio';
import Contact from './pages/contact/contact';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
