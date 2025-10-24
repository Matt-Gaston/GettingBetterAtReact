import "./App.css";
import Dice from "./Dice/Dice.tsx";
import { useState } from "react";
import { nanoid } from "nanoid";
import Confetii from "react-confetti";

function App() {

    const [dieValues, setDieValues] = useState(() => generateAllnewDice())
    const diceElements = dieValues.map(
                    (val) => <Dice 
                        value={val.value}
                        isHeld={val.isHeld}
                        key={val.id}
                        holdFunc={() => swapDiceHoldState(val.id)}
                        />
                )
    const gameWon = (dieValues.every((die) => die.isHeld) && 
                    dieValues.every((die) => die.value === dieValues[0].value))

    function generateAllnewDice() {
        return Array(10)
            .fill(0)
            .map(() => ({
                value: Math.floor(Math.random()*6 +1),
                isHeld: false,
                id: nanoid()}
            ))
    }

    function rerollDice(){
        if (gameWon) {
            setDieValues((prev_dieState) => (
                prev_dieState.map((die) => (
                    {
                        value: Math.floor(Math.random()*6 +1),
                        isHeld: false,
                        id: die.id
                    }
                ))
            ))
        } else {
            setDieValues((prev_dieState) => (
                prev_dieState.map((die) => (
                    {
                        ...die,
                        value: die.isHeld ? die.value : Math.floor(Math.random()*6 +1)
                    }
                ))
            ))
        }
    }

    function swapDiceHoldState(id:string) {
        setDieValues((prev_dieState) => (
            prev_dieState.map((die) => (
                {
                    ...die,
                    isHeld: die.id === id ? !die.isHeld : die.isHeld
                }
            ))
        ))
    }
    

    return (
        <main>
            {gameWon ? <Confetii/> : null}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="dieContainer">
                {diceElements}
            </div>
            <button className="roll-dice-btn" onClick={rerollDice}>{gameWon ? "New Game" : "Roll"}</button>
        </main>
    )
}

export default App
