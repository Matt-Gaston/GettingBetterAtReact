import { useState } from "react";

import "./App.css";
import GameHeader from "./Components/Header/Header.tsx";
import LanguageList from "./Components/LanguageList/LanguageList.tsx";
import StatusBar from "./Components/StatusBar/StatusBar.tsx";
import WordDisplay from "./Components/WordDisplay/WordDisplay.tsx"; 
import KeyboardButtons from "./Components/KeyboardButtons/KeyboardButtons.tsx";
import NewGameButton from "./Components/NewGameButton/NewGameButton.tsx";

import { languagesData } from "./assets/LanguageListData";

function App() {
    const [secretWord, setSecretWord] = useState<string>("react")
    const [guessedletters, setGetessedLetters] = useState<string[]>([])
    const wrong_guesses = guessedletters.filter((letter) => !secretWord.includes(letter)).length

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const bGameWon = secretWord.split("").every((letter) => guessedletters.includes(letter))
    const bGameOver = wrong_guesses >= languagesData.length-1


    function handleGuessedLetter(letter:string){
        // console.log(letter)
        if (bGameOver || bGameWon) {return}
        if (guessedletters.includes(letter)) { return }
        else {
            setGetessedLetters((prevLetters) => [...prevLetters, letter])
        }
    }

    return(
        <main>
            <GameHeader/>
            <StatusBar gameWon={bGameWon} gameOver={bGameOver}/>
            <LanguageList
                languagesData={languagesData}
                wrong_guesses={wrong_guesses}/>
            <WordDisplay 
                word={secretWord}
                guessedLetters={guessedletters}/>
            <KeyboardButtons 
                alphabet={alphabet}
                secretWord={secretWord}
                guessedLetters={guessedletters}
                handleLetterClick={handleGuessedLetter}/>
            <NewGameButton gameWon={bGameWon} gameOver={bGameOver}/>
        </main>
    )
}

export default App;