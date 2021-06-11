import './styles/App.css';
import Header from './Components/Header';
import Game from './Components/Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header highScore='0' score='0' />
        <Game />
      </header>
    </div>
  );
}

export default App;
