import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0,
      errorMsg: '',
    }
  }
  onCounterClick = (text) => {
    if (this.state.counter === 0) {
      this.setState({
        errorMsg: ''
      })
    }
    if (text === 'increment') {
      this.setState({
        counter: this.state.counter + 1,
      });
    }
    if (text === 'decrement') {
      if (this.state.counter === 0) {
        this.setState({
          errorMsg: 'Sorry, cannot decrement below 0'
        })
        return;
      }
      this.setState({
        counter: this.state.counter -1,
      })
    }
  }
  render () {
    return (
      <div data-test="app-component">
        <h1>App!</h1>
        <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
        <button data-test="increment-button" onClick={() => this.onCounterClick('increment')}>Increment counter</button>
        <button data-test="decrement-button" onClick={() => this.onCounterClick('decrement')}>Decrement counter</button>
        <div class="text-primary">{this.state.errorMsg}</div>
      </div>
    );
  }

}

export default App;
