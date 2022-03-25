import { useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  console.log('render')
  const [searchField, setSearchField] = useState('');  // Gives us back an array of 2 values. [value, setValue()]
  console.log( searchField );

  // This function will only load once.
  // This is better for performance than if it was attached to onChange() and needed to reload everytime the page rerenders.
  const onSearchChange = (event) => { // Whenever the user types in the text box, the monsters displayed are filtered down.
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>

      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
      />
      
    </div>
  );
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//     console.clear()
//     // console.log('1 constructor')
//   }

//   componentDidMount() {
//     // console.log('3 componentDidMount')
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())

//     .then((users) => this.setState(() => {
//       // console.log(users)
//       return {monsters: users}
//     }
//     ));
//   }

  

//   render() {
//     // console.log('2 render')
//     // console.log(this.state)

//     //Destructuring, so we don't need to call 'this' everywhere. Makes things more readable too.
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter( (mon) => mon.name.toLocaleLowerCase().includes(searchField));

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>

//         <SearchBox 
//           className='monsters-search-box'
//           onChangeHandler={onSearchChange} 
//           placeholder='search monsters'
//         />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
