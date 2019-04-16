import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import OrderSummary from './pages/OrderSummary';
import BookSassion from './pages/BookSassion';
import Payment from './pages/Payment';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={OrderSummary} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/booksassion" component={BookSassion} />
        </div>
      </Router>
    );
  }
}

export default App;
