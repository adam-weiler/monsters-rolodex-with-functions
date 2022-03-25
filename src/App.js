import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');  // Gives us back an array of 2 values. [value, setValue()] We expect string so set as blank for now.
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]); // monsters is our value, setMonsters is our setter. We expect an array so set it as blank for now.
  const [filteredMonsters, setFilteredMonsters] = useState([monsters]); // We use monsters as default value, just in case.

  // console.log('render')

  useEffect(() => { // This will run once when the app loads. 
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []);  // Takes 2 arguments. A callback function, and an array of dependencies. Since our dependencies are blank, it will never run again.

  useEffect(() => { // We can put this in a useeffect so that it doesn't rerun every time the page rerenders. 
    const newFilteredMonsters = monsters.filter( (mon) => {
      return mon.name.toLocaleLowerCase().includes(searchField)
    });

    setFilteredMonsters(newFilteredMonsters);

    // console.log('FILTER MONSTERS')

  }, [monsters, searchField]); // It will only run if our monsters array changes, or our searchField changes.

  // This function will only load once.
  // This is better for performance than if it was attached to onChange() and needed to reload everytime the page rerenders.
  const onSearchChange = (event) => { // Whenever the user types in the text box, the monsters displayed are filtered down.
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => { // Whenever the user types in the text box, the monsters displayed are filtered down.
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setTitle(searchFieldString);
  }

  // console.log(filteredMonsters)

  return (
    <div className="App">
      <h1 className="app-title">{title}</h1>

      <SearchBox 
        className='monsters-search-box'
        onChangeHandler={onSearchChange} 
        placeholder='search monsters'
      />
      <br/>
      <SearchBox 
        className='title-search-box'
        onChangeHandler={onTitleChange} 
        placeholder='TITLE CHANGE'
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
