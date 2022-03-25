import './card.styles.css';

const Card = ({ monster }) => { // A component that display monster card with image, name, email.
    const { name, email, id } = monster;

    return (
        <div className='card-container' key={id}>
            <img alt={`monster' ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;