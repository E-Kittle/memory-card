import React from 'react';
import '../styles/game.css';

const Card = (props) => {
    return(
        <div key={props.card.name} className='cardContainer'>
            <h2 className='cardTitle'>{props.card.name}</h2>
            <div className='cardImage'>{props.card.url}</div>

            {/* <img src={require(`${props.card.url}`)}></img>
            <img src={require(`./images/dog.jpg`)}></img>
            <img src={dog}></img> */}
        </div>
        
    )
}


export default Card