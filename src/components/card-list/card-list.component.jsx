import { Component } from 'react';

//This component renders our monster list from the filteredMonsters list.
class CardList extends Component {
    render() {
        const { monsters } = this.props;
        
        return (
            <div>
                {monsters.map(monster => (
                    <h1 key={monster.id}>{monster.name}</h1>
                ))}
            </div>
        )
    }
}

export default CardList;