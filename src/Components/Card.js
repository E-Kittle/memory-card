import React from 'react';
import '../styles/game.css';
// import image from `{props.card.url}`

const Card = (props) => {

    const { didUserWin } = props;

    return(
        <div key={props.card.name} id={props.card.name} className='cardContainer' >
            <h2 className='cardTitle'>{props.card.name}</h2>
            <img src={props.card.url} id={props.card.name} onClick={didUserWin} />



            {/* <div className='cardImage' id={props.card.name} onClick={didUserWin}>{props.card.url}</div>
            <div>{props.card.url}</div>
            <img src={props.card.url} alt={props.card.name}></img> */}
        </div>
        
    )
}


export default Card