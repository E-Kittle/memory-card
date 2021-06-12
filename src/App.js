import './styles/App.css';
import Header from './Components/Header';
import Game from './Components/Game';
import React, {useState, useEffect} from 'react';
import Modal from './Components/Modal';

function App() {


  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [modalShowing, setModalShowing] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const hideModal = () => {
    setModalShowing(false);
    setModalMessage('');
  }

  const showModal = (message) => {
    setModalShowing(true);
    setModalMessage(message);
  }

  const handleScore = (status) => {
    if (status) {
      setScore(prevScore => prevScore + 1);
    }
    else {
      setScore(0);
    }
  }

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
