import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};

    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  }

  decrementCounter() {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  }

  render() {
    const { counter } = this.state;

    return (
      <div>
        <h1>The counter is at {counter}</h1>
        <button onClick={this.incrementCounter}>Increment</button>
        <button onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
