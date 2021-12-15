import React from 'react'
import "./SearchBox.scss";

const SearchBox = (props) => {
    const {label, searchTerm, handleSearch} = props;
    return (
        <div className="searchbox">
            <input type="text" name={label} placeholder="Search..." value={searchTerm} onInput={handleSearch}></input>
        </div>
    )
}

export default SearchBox;
