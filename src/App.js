import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: {firstName: 'John', lastName: 'Smith'},
      home: 'North America'
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}! I live in { this.state.home }.
          </p>
          <button onClick={() => {
            this.setState((state, props) => {	// This is an updater function.
              return {
                name: { firstName:'Adam', lastName:'Weiler' }, // Return an object that will shallow merge against state.
              };
            });
          }}>Change name</button>
        </header>
      </div>
    );
  }
}

export default App;
