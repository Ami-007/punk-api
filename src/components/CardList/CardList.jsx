import React from "react";
import Card from "../Card/Card";

import "./CardList.scss";

const CardList = (props) => {
    const { beerArr } = props;

    const beerCard = beerArr.map((beer) => {
        return (
        <Card
        key={beer.id}
        beerImg={beer.image_url}
        name={beer.name}
        abv={beer.abv}
        beerInfo={beer.description}
        />);
    })
        return (
            <div className="beerContainer">
                {beerCard}  
            </div>

    )

    
    // .filter((beer) => beer.name.toLowerCase().includes(searchTerm.toLowerCase()))
    
}


export default CardList;