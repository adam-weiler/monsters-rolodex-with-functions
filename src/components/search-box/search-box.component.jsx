import { Component } from 'react';

//This component renders a searchbox to filter down the monsters list.
//It is a generic component, so you can pass in any className, placeholder, and onChange function.
class SearchBox extends Component {
    render() {
        return (
            <input 
                className={this.props.className}
                type='search'
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
}

export default SearchBox;