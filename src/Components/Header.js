import React from 'react';
import '../styles/header.css'

const Header = (props) => {

    // Displays the header and the scorecard
    return (
        <div className="header">
            <div className="title">
                <h1>Memory Game</h1>
                <p>Win by clicking on all of the cards, but don't click on a card more than once!</p>
            </div>

            <div className="scoreCard">
                <h2>Score Card</h2>
                <p>Highscore: {props.highScore}</p>
                <p>Current Score: {props.score}</p>
            </div>
        </div>
    )
}

export default Header