import React from "react";
import FiltersList from "../FiltersList/FiltersList";
import SearchBox from "../SearchBox/SearchBox";

import "./NavBar.scss";

const NavBar = (props) => {
        const {handleSearch, searchTerm} = props;
        return (
        <div className="nav">
                <SearchBox handleSearch={handleSearch} searchTerm={searchTerm}/>
                <FiltersList />
        </div>
        )
}

export default NavBar;