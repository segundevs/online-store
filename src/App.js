import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import About from './pages/About';
import Cart from './pages/Cart';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {


  return (
    <Router>
    <div className="App">
      <Header />
      <Hero />
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Shop} path="/shop" />
        <Route component={Contact} path="/contact" />
        <Route component={About} path="/about" />
        <Route component={Cart} path="/cart" />
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
