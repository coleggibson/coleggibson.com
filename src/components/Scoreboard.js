import React from 'react';
import ReactDOM from 'react-dom/client';
import './Cards.js';

const Scoreboard = ({currentScore, bestScore}) => {
    return (<div id='score-items-container'>
                <div className='score-keeper'>Score:{currentScore}</div>
                <div className='score-keeper'>Best Score:{bestScore}</div>
            </div>
    )
}

export default Scoreboard