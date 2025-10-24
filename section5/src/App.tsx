import "./App.css";
import Dice from "./Dice/Dice.tsx";

function App() {
    return (
        <main>
            <div className="dieContainer">
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
                <Dice value={1} />
            </div>
        </main>
    )
}

export default App
