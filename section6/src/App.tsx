import { useState } from "react";

import "./App.css";
import GameHeader from "./Components/Header/Header";
import LanguageList from "./Components/LanguageList/LanguageList";
import StatusBar from "./Components/StatusBar/StatusBar";
import WordDisplay from "./Components/WordDisplay/WordDisplay"; 
import KeyboardButtons from "./Components/KeyboardButtons/KeyboardButtons";

function App() {
    const [secretWord, setSecretWord] = useState<string>("react")
    const alphabet="abcdefghijklmnopqrstuvwxyz";

    return(
        <>
            <GameHeader/>
            <StatusBar/>
            <LanguageList/>
            <WordDisplay word={secretWord}/>
            <KeyboardButtons alphabet={alphabet}/>
        </>
    )
}

export default App;