import React from 'react';

const Header = (props) => {

    return (
        <div className="header">
            <div className="title">
                <h1>Memory Game</h1>
                <p>Win by clicking on all of the cards, but don't click on a card more than once!</p>
            </div>

            <div className="scoreCard">
                <table>
                    <tr>
                        <td>Highscore:</td>
                        <td>{props.highScore}</td>
                    </tr>
                    <tr>
                        <td>Current Score:</td>
                        <td>{props.score}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Header