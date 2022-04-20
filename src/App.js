import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Timer from './components/timer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        showTimer: true
    }
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <button onClick={() => this.setState({ showTimer: false })}>Destroy Timer</button>
            { this.state.showTimer && <Timer /> }
        </header>
      </div>
    );
  }
}

export default App;
