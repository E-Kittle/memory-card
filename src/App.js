import './styles/App.css';
import Header from './Components/Header';
import Game from './Components/Game';
import React, {useState, useEffect} from 'react';
import Modal from './Components/Modal';

function App() {

  // state to hold the score and data for the modal
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [modalShowing, setModalShowing] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  // Hides the modal and clears the modals message - triggered by X (close) button in Modal.js
  const hideModal = () => {
    setModalShowing(false);
    setModalMessage('');
  }

  // Shows the modal and displays the appropriate message - Triggered by useEffect in App.js or if user loses in Game.js
  const showModal = (message) => {
    setModalShowing(true);
    setModalMessage(message);
  }

  // Increments the users score if they didn't lose. If they lost, it sets score to 0
  const handleScore = (status) => {
    if (status) {
      setScore(prevScore => prevScore + 1);
    }
    else {
      setScore(0);
    }
  }

  // effect hook that updates the highscore if necessary, and/or displays a modal if the user has selected all options
  useEffect(() => {
    if (score >= highScore) {
      setHighScore(score);
    }

    if (score === 15) {
      // The user won - Used to alert(You won!)
      showModal('You won! Game reset')
      setScore(0);
    }
  })


  return (
    <div className="App">
      {modalShowing? <Modal hideModal={hideModal} message={modalMessage}/> : null}
      <header className="App-header">
        <Header highScore={highScore} score={score} />
        <Game handleScore={handleScore} showModal={showModal}/>
      </header>
    </div>
  );
}

export default App;
