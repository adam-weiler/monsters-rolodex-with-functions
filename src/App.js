import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
    console.clear()
    // console.log('1 constructor')
  }

  componentDidMount() {
    // console.log('3 componentDidMount')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())

    .then((users) => this.setState(() => {
      // console.log(users)
      return {monsters: users}
    }
    ));
  }

  // This function will only load once.
  // This is better for performance than if it was attached to onChange() and needed to reload everytime the page rerenders.
  onSearchChange = (event) => { // Whenever the user types in the text box, the monsters displayed are filtered down.

    // console.log(event.target.value);

    const searchField = event.target.value.toLowerCase();

    this.setState(() => {
      return {
        //searchField: searchField
        searchField
      }
    })
  }

  render() {
    // console.log('2 render')
    // console.log(this.state)

    //Destructuring, so we don't need to call 'this' everywhere. Makes things more readable too.
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter( (mon) => mon.name.toLocaleLowerCase().includes(searchField));

    return (
      <div className="App">
        <SearchBox 
          className='search-box'
          onChangeHandler={onSearchChange} 
          placeholder='search monsters'
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
