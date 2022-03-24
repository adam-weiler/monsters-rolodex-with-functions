import { Component } from 'react';

import './card-list.styles.css';

//This component renders our monster list from the filteredMonsters list.
class CardList extends Component {
    render() {
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    const { name, email, id } = monster; //Destructure the monster to variables to make code cleaner.
                    return (
                        <div className='card-container' key={id}>
                            <img alt={`monster' ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                            <h2>{name}</h2>
                            <p>{email}</p>
                        </div>
                    )})}
            </div>
        )
    }
}

export default CardList;