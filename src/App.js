import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route eact path='/'>
            <Intro />
          </Route>
          <Route eact path='/projects'>
            <Projects />
          </Route>
          <Route eact path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
