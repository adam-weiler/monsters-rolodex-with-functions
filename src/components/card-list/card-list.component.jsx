import { Component } from 'react';
import Card from './card.component'

import './card-list.styles.css';

//This component renders our monster list from the filteredMonsters list.
class CardList extends Component {
    render() {
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    // const { name, email, id } = monster; //Destructure the monster to variables to make code cleaner.
                    return (
                        <Card monster={monster} key={monster.id} />
                    )})}
            </div>
        )
    }
}

export default CardList;