import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      // monstersFiltered: [],
      searchField: '',
    }
    console.clear()
    console.log('1 constructor')
  }

  componentDidMount() {
    console.log('3 componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then((users) => this.setState(() => {
      // console.log(users[5].name)
      console.log(users)

      return {monsters: users}
    },
    () => {
      console.log(this.state)
    }
    ));
  }

  render() {
    console.log('2 render')
    // console.log(this.state)

    const filteredMonsters = this.state.monsters.filter( (mon) => mon.name.toLocaleLowerCase().includes(this.state.searchField));


    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='Search monsters' onChange={(event) => {

          // console.log(event.target.value);

          const searchField = event.target.value.toLowerCase();

          this.setState(() => {
            return {
              //searchField: searchField
              searchField
            }
          })
        }} />

        {
        filteredMonsters.map((monster) => {
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
