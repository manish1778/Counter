import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div className="App">
        <h1>Counter App</h1>
        <h1>{this.state.count}</h1>
        <div className="button-container">
          <button className="decrement" onClick={this.handleDecrement}>
            Decrement
          </button>
          <button className="reset" onClick={this.handleReset}>
            Reset
          </button>
          <button className="increment" onClick={this.handleIncrement}>
            Increment
          </button>
        </div>
      </div>
    );
  }
}

export default App;
