import React from "react";
import CardList from "../CardList/CardList";

import "./Main.scss";

const Main = (props) => {
    const {beerArr} = props;

    return (
        <div className="mainContainer">
            <CardList beerArr={beerArr}/> 
        </div>
    )

   

}

export default Main;