import React, {Component} from 'react';

class Search extends Component {
    onInputChange = (event) => {
        return this.props.setSearch(event.target.value)
    }

    render() {
        return (
            <div>
                <input onChange={this.onInputChange} type="text" className="form-control search-bar "/>
            </div>
        );
    }
}

export default Search;