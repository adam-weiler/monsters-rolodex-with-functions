import './search-box.styles.css';

//This component renders a searchbox to filter down the monsters list.
//It is a generic component, so you can pass in any className, placeholder, and onChange function.
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
    <input 
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
    />
)

export default SearchBox;