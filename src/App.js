import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import ProductPage from './pages/Product/ProductPage';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Nav />
            <Carousel />
            <Home />
            <Footer />
          </Route>
          <Route exact path="/regis">
            <Nav />
            <Register />
            {/* <Footer /> */}
          </Route>
          <Route exact path="/login">
            <Nav />
            <Login />
            {/* <Footer/> */}
          </Route>
          <Route exact path="/product">
            <Nav />
            <ProductPage />
            {/* <Footer /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
