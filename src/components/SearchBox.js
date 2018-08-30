import React from 'react';

const SearchBox = (props) => {
    return (
        <div className="pa2">
            <input
                aria-label="Search Robots"
                className="pa3 ba b--green bg-lightest-blue"
                type="search"
                placeholder="search robots"
                onChange={props.searchChange} />
        </div>
    );
}

export default SearchBox;
