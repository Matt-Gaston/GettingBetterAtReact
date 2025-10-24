import "./App.css";
import Dice from "./Dice/Dice.tsx";
import { useState } from "react";

function App() {

    const [dieValues, setDieValues] = useState<number[]>(generateAllnewDice())

    function generateAllnewDice(): number[]{
        return Array(10)
            .fill(0)
            .map(() => Math.floor(Math.random()*6 +1))
    }

    const diceElements = dieValues.map(
                    (val) => <Dice value={val}/>
                )

    console.log(generateAllnewDice())
    return (
        <main>
            <div className="dieContainer">
                {diceElements}
            </div>
        </main>
    )
}

export default App
