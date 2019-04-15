import React, { Component } from 'react';
import OrderSummary from './pages/OrderSummary';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderSummary />
      </div>
    );
  }
}

export default App;
