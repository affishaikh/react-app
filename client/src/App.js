import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // componentDidMount() {
  //   fetch('/count')
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(json => {
  //       this.setState(() => {
  //         const counter = json.counter;
  //         return { counter };
  //       });
  //     });
  // }

  kageBunshin() {
    fetch('/count', {
      method: 'POST'
    })
      .then(res => {
        return res.json();
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
      <h1 onClick={this.kageBunshin.bind(this)}>
        My name is Naruto Uzumaki {this.state.counter}
      </h1>
    );
  }
}

export default App;
