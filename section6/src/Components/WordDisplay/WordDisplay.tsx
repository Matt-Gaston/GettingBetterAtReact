

import "./WordDisplay.css";


interface WordDisplayProps{
    word: string
    guessedLetters: string[]
}

function WordDisplay(props: WordDisplayProps) {
    const letterElements = props.word.split("").map((letter, index) => <span key={index}>{props.guessedLetters.includes(letter) ? letter.toUpperCase() : " "}</span>)

    return(
        <section className="word-display-con">
            {letterElements}
        </section>
        
    )
}

export default WordDisplay;