import React from "react";
import FiltersList from "../FiltersList/FiltersList";
import SearchBox from "../SearchBox/SearchBox";

import "./NavBar.scss";

const NavBar = () => {
        return (
        <div className="nav">
                <p>Navbar works</p>
                <SearchBox />
                <FiltersList />
        </div>
        )
}

export default NavBar;