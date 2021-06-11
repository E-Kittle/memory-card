import React from 'react';

const Header = (props) => {

    return (
        <div className="header">
            <div className="title">
                <h1>Match the Cards</h1>
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