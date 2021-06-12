import React from 'react';
import '../styles/game.css';

const Card = (props) => {

    
    const { didUserWin } = props;

    // returns a Card component that displays the cards titme and the image
    return(
        <div key={props.card.name} id={props.card.name} className='cardContainer' >
            <h2 className='cardTitle'>{props.card.name}</h2>
            <img src={props.card.url} id={props.card.name} onClick={didUserWin} />
        </div>
        
    )
}


export default Card