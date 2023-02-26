import '../style/cards.css';
import uniqid from "uniqid"
import React, {useEffect, useState} from "react"
import {
    Gameboy,
    Nes,
    Gamecube,
    Nintendods,
    Ps5, 
    Sega, 
    Switch, 
    Xbox, 
    Playstation
} from '../images'




const Cards = ({currentScore, setCurrentScore, bestScore, setBestScore}) => {

    const [cards, setCards] = useState([
        {title:'Gameboy', imgsrc: Gameboy, id:uniqid(0)},
        {title:'Nes', imgsrc: Nes,id:uniqid(1)},
        {title:'Gamecube', imgsrc: Gamecube, id:uniqid(2)},
        {title:'Nintendo DS', imgsrc: Nintendods, id:uniqid(3)},
        {title:'Playstation 5', imgsrc: Ps5, id:uniqid(4)}, 
        {title:'Sega', imgsrc: Sega, id:uniqid(5)}, 
        {title:'Switch', imgsrc: Switch, id:uniqid(6)}, 
        {title:'Xbox', imgsrc: Xbox, id:uniqid(7)}, 
        {title:'Playstation', imgsrc: Playstation, id:uniqid(8)}
    ]);

    const [clickArray, setClickArray] = useState([])


    const shuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
          
        setCards([...cards])
    }

    const keepScore = (id) => {
        let duplicateStatus = clickArray.includes(id)
        
        clickArray.push(id)

        setClickArray(clickArray)

        
        if (duplicateStatus == false) {
            setCurrentScore(currentScore + 1) 
        } else if (duplicateStatus == true){
            checkBest(currentScore)
            setCurrentScore(0)
            setClickArray([])
        }
        console.log(id)
    }

    const checkBest = (currentScore) => {
        if (currentScore > bestScore)  {
            setBestScore(bestScore = currentScore)
        }
    }

  
    return(
    <div id="cardContainer">
        {cards.map((card) => {
            return (<div key={card.id} 
                    className='cardDiv' 
                    onClick={() => {shuffleCards(cards); keepScore(card.id);}}>
                        <img className ='cardImg'src={card.imgsrc}></img>
                        <div>{card.title}</div>
                   </div>
            )
        })}
    </div>
    )
}


export default Cards