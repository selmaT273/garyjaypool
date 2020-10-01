import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Bio from './components/pages/Bio';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import Tribute from './components/pages/Tribute';
import Shop from './components/pages/Shop';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/bio' exact component={Bio} />
        <Route path='/works' exact component={Works} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/tribute' exact component={Tribute} />
        <Route path='/contact' exact component={Contact} />


      </Switch>
    </Router>
  );
}

export default App;
