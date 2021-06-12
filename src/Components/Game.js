import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/game.css';

const Game = (props) => {

    const { handleScore, showModal } = props;


    //Stored state: The currently selected cards, highscore, and score
    //Highscore and score will somehow have to be passed to Header.js --> need to figure this out later either using a function or Redux
    const [chosenAnimals, setChosenAnimals] = useState([]);
    const [imgArray, setImgArray] = useState([
        { name: 'Cat', url: '/images/cat.jpg' }, { name: 'Dog', url: '/images/dog.jpg' }, { name: 'Catfish', url: '/images/catfish.jpg' }, { name: 'Fox', url: '/images/fox.jpg' }, { name: 'Gecko', url: '/images/gecko.jpeg' }, { name: 'Horse', url: '/images/horse.jpg' }, { name: 'Ladybug', url: '/images/ladybug.jpg' }, { name: 'Narwhal', url: '/images/narwhal.jpg' }, { name: 'Ocelot', url: '/images/ocelot.jpg' }, { name: 'Owl', url: '/images/owl.png' }, { name: 'Penguin', url: '/images/penguin.jpg' }, { name: 'Seal', url: '/images/seal.jpg' }, { name: 'Shark', url: '/images/shark.jpg' }, { name: 'Snake', url: '/images/snake.jpeg' }, { name: 'Tardigrade', url: '/images/tardigrade.jpeg' }
    ]);
    const [userInput, setUserInput] = useState(false);


    const didUserWin = (e) => {
        let animal = e.target.id;

        setUserInput(true);                 //Flag to shuffle the page in ComponentDidMount
        let passed = true;                  //Flag to increment the score if the user passed the level

        if (chosenAnimals.length > 0) {
            chosenAnimals.forEach(item => {
                if (item === animal) {              //player lost
                    handleScore(false);
                    setChosenAnimals([]);
                    passed = false;
                    showModal('you lost');
                }
            });
        }

        if (passed) {       
            //Add the animal to the chosenAnimals array       
            setChosenAnimals([...chosenAnimals, animal]);
            handleScore(true);
        }

    }



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

    // This shuffles the deck after the user interacts with the UI
    useEffect(() => {
        if (userInput) {
            // Shuffles the cards and sets the imgArray to the newly shuffled deck
            let newArr = shuffleCards([...imgArray]);
            setImgArray(newArr);

            // Sets the user input flag to false - Avoiding an endless loop
            setUserInput(false);

            // Resets chosenAnimals array if the user has selected all of the animals
            if (chosenAnimals.length === 15) {
                setChosenAnimals([]);
            }
        }
    });

    return (
        <div className="cardsContainer" >
            {imgArray.map(card => {
                return <Card card={card} key={card.name} didUserWin={didUserWin} />
            })}
        </div>
    )
}

export default Game;