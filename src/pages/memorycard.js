import '../style/memorycard.css';
import Cards from '../components/cards.js'
import Scoreboard from '../components/Scoreboard.js'
import React, {useState} from "react"

function Memorycard() {

  let [currentScore, setCurrentScore] = useState(0);
  let [bestScore, setBestScore] = useState(0)

  return (
    <div className="App" id='memorycard-body'>
      <div id="header-container"> 
        <h1>Console Memory Game</h1>
        <Scoreboard currentScore={currentScore} setCurrentScore={setCurrentScore}
                    bestScore={bestScore} setBestScore={setBestScore}/>
      </div>
        <Cards currentScore={currentScore} setCurrentScore={setCurrentScore}
                bestScore={bestScore} setBestScore={setBestScore}/>
    </div>
  );
}

export default Memorycard;
