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
          <Route>
            <Nav />
            <Carousel />
            <Home />
            <Footer />
          </Route>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register" component={Register} exact />
            <Route path="/login" component={Login} exact />
            <Route path="/product" component={ProductPage} exact />
            <Route path="/cart" component={Cart} exact/>
          </Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
