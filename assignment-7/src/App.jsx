import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import PlayerThrow from './PlayerThrow'
import ComputerThrow from './ComputerThrow'
import ResultDisplay from './ResultDisplay'
import './style.css'


function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState("");
  console.log("Player:", playerChoice);
  console.log("Computer:", computerChoice);
  console.log("Result:", result);
  return(
    <div>
      <h1>Rock Paper Scissors With React</h1>
      <PlayerThrow setPlayerChoice={setPlayerChoice}/>
      <ComputerThrow playerChoice={playerChoice} setComputerChoice={setComputerChoice} setResult={setResult}/>
      <ResultDisplay result={result}/>
    </div>
  )
}

export default App
