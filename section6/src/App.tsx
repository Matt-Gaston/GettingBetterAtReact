import { useState } from "react";

import "./App.css";
import GameHeader from "./Components/Header/Header.tsx";
import LanguageList from "./Components/LanguageList/LanguageList.tsx";
import StatusBar from "./Components/StatusBar/StatusBar.tsx";
import WordDisplay from "./Components/WordDisplay/WordDisplay.tsx"; 
import KeyboardButtons from "./Components/KeyboardButtons/KeyboardButtons.tsx";
import NewGameButton from "./Components/NewGameButton/NewGameButton.tsx";

import { languagesData } from "./assets/LanguageListData";
import { words as wordList } from "./assets/WordList.tsx";
import Confetti from "react-confetti";

function App() {
    const [secretWord, setSecretWord] = useState<string>(() => getRandomWord())
    const [guessedletters, setGuessedLetters] = useState<string[]>([])
    const wrong_guesses = guessedletters.filter((letter) => !secretWord.includes(letter)).length

    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const bGameWon = secretWord.split("").every((letter) => guessedletters.includes(letter))
    const bGameOver = wrong_guesses >= languagesData.length-1
    const bShowFarewll = !secretWord.includes(guessedletters[guessedletters.length-1]) && guessedletters.length > 0

    console.log(secretWord)


    function handleGuessedLetter(letter:string){
        if (guessedletters.includes(letter)) { return }
        else {
            setGuessedLetters((prevLetters) => [...prevLetters, letter])
        }
    }

    function getRandomWord(){
        const randIndex = Math.floor(Math.random() * wordList.length);
        return wordList[randIndex];
    }

    function startNewGame(){
        setGuessedLetters([])
        setSecretWord(getRandomWord())
    }

    return(
        <main>
            {bGameWon? <Confetti/> : null}
            <GameHeader/>

            <StatusBar
                gameWon={bGameWon}
                gameOver={bGameOver}
                showFarewell={[bShowFarewll, languagesData[Math.max(wrong_guesses-1, 0)].name]}/>

            <LanguageList
                languagesData={languagesData}
                wrong_guesses={wrong_guesses}/>

            <WordDisplay 
                gameOver={bGameOver}
                word={secretWord}
                guessedLetters={guessedletters}/>

            <KeyboardButtons
                gameOver={bGameWon||bGameOver}
                alphabet={alphabet}
                secretWord={secretWord}
                guessedLetters={guessedletters}
                handleLetterClick={handleGuessedLetter}/>

            <NewGameButton
                gameWon={bGameWon}
                gameOver={bGameOver}
                handleClick={startNewGame}/>
        </main>
    )
}

export default App;