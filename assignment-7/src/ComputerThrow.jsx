/** @function ComputerThrow */
/*
  The function to randomly generate the computer's choice and compare it to the user's
  choice to the computer's choice, then it generate result to be sent to the resultdisplay
  component.
*/
import { useState, useEffect } from "react";
const choices = ["rock", "paper", "scissors"];

function ComputerThrow({playerChoice, setComputerChoice, setResult}){
    
    const [tempChoice, setTempChoice] = useState(null);
    const [animating, setAnimating] = useState(false)

    useEffect (() =>{
    if(!playerChoice) return;

    setComputerChoice(null);
    setAnimating(true);
    let count = 0;

    const interval = setInterval(() =>{
      const random = choices[Math.floor(Math.random() *3)];
      setTempChoice(random);
      count++

      if(count === 6){
        clearInterval(interval);
        setAnimating(false);
        const computerChoice = random;
        setComputerChoice(computerChoice);

        let compare = "";
        if(playerChoice === computerChoice){
            compare = "Tie";
        } else if(playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "paper" && computerChoice === "rock" || playerChoice === "scissors" && computerChoice === "paper"){
            compare = "Win";
        } else{
            compare = "Lose";
        }
        setResult(compare);
        
      }
    }, 500);
    return () => clearInterval(interval)
  }, [playerChoice, setComputerChoice, setResult])

    return(
        <div>
            <h2>Computer</h2>
            <img src={tempChoice ? `/${tempChoice}.PNG` : "/question-mark.PNG"} alt="computer choice" />

            {animating && <p>Thinking...</p>}
        </div>
    )
}

export default ComputerThrow