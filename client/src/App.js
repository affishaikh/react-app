import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    fetch('/count')
      .then(res => {
        res.json();
      })
      .then(json => {
        this.setState(() => {
          const counter = json.counter;
          return { counter };
        });
      });
  }

  render() {
    return (
      <h1 onClick={this.naruto.bind(this)}>
        My name is Uzumaki Naruto {this.state.counter}
      </h1>
    );
  }
}

export default App;
