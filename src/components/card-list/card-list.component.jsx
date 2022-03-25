import Card from '../card/card.component'

import './card-list.styles.css';

//This component renders our monster list from the filteredMonsters list.
const CardList = ({ monsters }) => (   // We can do the destructuring of props and store as monsters instead.  
    <div className='card-list'>
        {monsters.map(monster => {
            return <Card key={monster.id} monster={monster} /> // We want to pass the entire monster object through.
        })}
    </div>
)

export default CardList;