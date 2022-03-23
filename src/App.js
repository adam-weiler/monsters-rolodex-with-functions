import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      monstersFiltered: [],
      // filter: 'Leanne',
    }
    console.clear()
    console.log('1 constructor')
  }

  componentDidMount() {
    console.log('3 componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then((users) => this.setState(() => {

      // users.filter(el => el.name.includes(this.state.filter))
      // console.log(users[5].name)
      console.log(users)

      return {monsters: users, monstersFiltered: users}
    },
    () => {
      console.log(this.state)
    }
    ));
  }

  render() {
    console.log('2 render')
    console.log(this.state)
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search monsters' onChange={(event) => {


          const filteredMonsters = this.state.monsters.filter( (mon) => mon.name.includes(event.target.value))

          // console.log(event.target.value)
          this.setState(() => {
            return {
              // filter: event.target.value
              monstersFiltered: filteredMonsters
            }
          })
        }} />

        {
        this.state.monstersFiltered.map((monster) => {
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
