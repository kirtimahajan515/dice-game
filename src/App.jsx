import { useState } from "react"
import StartGame from "./Components/StartGame"
import GamePlay from "./Components/GamePlay";

function App() {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGameStarted = () => {
    setIsGameStarted((prev) => !prev);
  };
  
  return (
    <>
    {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGameStarted} />}

      
   </>
  )
}

export default App
