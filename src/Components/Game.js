import React, { useState, useEffect} from 'react';
import cat from './images/cat.jpg';
import Card from './Card';
import '../styles/game.css';

const Game = () => {
    //Stored state: The currently selected cards, highscore, and score
    //Highscore and score will somehow have to be passed to Header.js --> need to figure this out later either using a function or Redux
    const [score, setScore] = useState(0);
    const [highScore, setHighScore ] = useState(0);
    const [choseImages, setChosenImages ] = useState([]);

    //Array to hold the image objects. each object holds the url of the image and its name
    //We don't have to worry about a key (for react) since we can just use the index - We're not doing calculations off the index so this is fine
    const imgArray = [
        {name: 'Cat', url: 'cat'}, {name: 'Dog', url: 'dog'}, {name: 'Catfish', url: 'catfish'}, {name: 'Fox', url: 'fox'}, {name: 'Gecko', url: 'gecko'}, {name: 'Horse', url: 'horse'}, {name: 'Ladybug', url: 'ladybug'}, {name: 'Narwhal', url: 'narwhal'}, {name: 'Ocelot', url: 'ocelot'}, {name: 'Owl', url: 'owl'}, {name: 'Penguin', url: 'penguin'}, {name: 'Seal', url: 'seal'}, {name: 'Shark', url: 'shark'}, {name: 'Snake', url: 'snake'}, {name: 'Tardigrade', url: 'tardigrade'}
    ]
    
    //This shuffles the cards using the Fisher-Yates shuffle
    const shuffleCards = (arr) => {
        let currentIndex = arr.length;
        let randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
        }

        return arr;      
    }
    
    //This duplicates the cards, shuffles them, and maps through the elements to display them on the DOM
    const displayCards = () => {
        //Duplicate the cards
        let arr = [...imgArray];
        arr = arr.concat(arr);

        //Shuffle the cards
        const shuffledDeck = shuffleCards(arr);
        console.log(shuffledDeck);

        return shuffledDeck.map(card => {
            return <Card card={card} />
        })
    };

    



    // This calls the function displayCards(), which duplicates the array, shuffles it, and returns the <Card> components. This is displayed to the DOM in the below return statement
    const cards = displayCards();

    return (
        <div className="cardsContainer">
            {/* <img src={imgArray[0].url} alt="didn't workf"></img> */}
            {/* <img src={require ('../images/cat.jpg')} alt='also didnt work'></img> */}
            {/* <img src={cat} alt="failed again"></img>
            <h2>{imgArray[0].url}</h2>
            <h1>From Cards:</h1> */}
            {cards}
        </div>

    )

}

export default Game;