import React, { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/game.css';

const Game = (props) => {

    //Destructuring
    const { handleScore, showModal } = props;

    // Declaring state
    //chosenAnimals holds the list of animals that have already been chosen
    const [chosenAnimals, setChosenAnimals] = useState([]);
    
    //Holds the array of animals/images - This is shuffled in useEffect after every render
    const [imgArray, setImgArray] = useState([
        { name: 'Cat', url: '/images/cat.jpg' }, { name: 'Dog', url: '/images/dog.jpg' }, { name: 'Catfish', url: '/images/catfish.jpg' }, { name: 'Fox', url: '/images/fox.jpg' }, { name: 'Gecko', url: '/images/gecko.jpeg' }, { name: 'Horse', url: '/images/horse.jpg' }, { name: 'Ladybug', url: '/images/ladybug.jpg' }, { name: 'Narwhal', url: '/images/narwhal.jpg' }, { name: 'Ocelot', url: '/images/ocelot.jpg' }, { name: 'Owl', url: '/images/owl.png' }, { name: 'Penguin', url: '/images/penguin.jpg' }, { name: 'Seal', url: '/images/seal.jpg' }, { name: 'Shark', url: '/images/shark.jpg' }, { name: 'Snake', url: '/images/snake.jpeg' }, { name: 'Tardigrade', url: '/images/tardigrade.jpeg' }
    ]);

    //state to prevent uncontrolled shuffling of the imgArray during useEffect
    const [userInput, setUserInput] = useState(false);

    // Function to check if user won and update state
    const didUserWin = (e) => {
        let animal = e.target.id;

        setUserInput(true);                 //Flag to shuffle the page in ComponentDidMount
        let passed = true;                  //Flag to increment the score if the user passed the level

        // Checks if the chosenAnimals array has anything in it
        if (chosenAnimals.length > 0) {

            // Checks if the chosenAnimals array has an existing animal -
            chosenAnimals.forEach(item => {

                //If the animal already exists in chosenAnimals, then user lost. This resets the score, shows the modal, and resents the chosenAnimals array
                if (item === animal) {              
                    handleScore(false);
                    setChosenAnimals([]);
                    passed = false;
                    showModal('you lost');
                }
            });
        }

        // passed=true if the user chose a correct animal card. Appends the animal to the chosenAnimals array and updates the score
        if (passed) {          
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

        // if userInput = true (meaning that the user just 'moved') then it
        //Shuffles the cards and sets the imgArray to the newly shuffled deck
        // if userInput = false, then the deck has already been shuffled (without this conditional
        // we'll have an endless loop)
        if (userInput) {
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

    // maps through the imgArray to display each card to the user
    return (
        <div className="cardsContainer" >
            {imgArray.map(card => {
                return <Card card={card} key={card.name} didUserWin={didUserWin} />
            })}
        </div>
    )
}

export default Game;