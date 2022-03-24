import { Component } from 'react';
import Card from '../card/card.component'

import './card-list.styles.css';

//This component renders our monster list from the filteredMonsters list.
class CardList extends Component {
    render() {
        const { monsters } = this.props;
        
        return (
            <div className='card-list'>
                {monsters.map(monster => {
                    return (
                        // We want to pass the entire monster object through.
                        <Card monster={monster} key={monster.id} />
                    )})}
            </div>
        )
    }
}

export default CardList;