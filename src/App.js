import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: '12e1231e',
          name: 'Linda',
        },
        {
          id: '13e1231e',
          name: 'Frank',
        },
        {
          id: '14e1231e',
          name: 'Jackie',
        },
        {
          id: '15e1231e',
          name: 'Drac',
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          })
        }
      </div>
    );
  }
}

export default App;
