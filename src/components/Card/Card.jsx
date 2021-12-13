import React from "react";

import "./Card.scss";

const Card = (props => {
    const {name, beerImg, abv, beerInfo} = props;
        return(
            <div className="beerCard">
               
                <img src={beerImg} alt={name} className="beerCard__img"/>
                <h2 className="beerCard__name">{name}</h2>
                <p className="beerCard__abv">ABV: {abv}%</p>
                <p className="beerCard__info">{beerInfo}</p>
            </div>
    )

});

export default Card;

