

import "./WordDisplay.css";


interface WordDisplayProps{
    word: string
    guessedLetters: string[]
    gameOver: boolean
}

function WordDisplay(props: WordDisplayProps) {

    if (props.gameOver){
        const letterElements = props.word.split("").map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>)
        return (
            <section className="word-display-con">
                {letterElements}
            </section>
        )
    } else {
        const letterElements = props.word.split("").map((letter, index) => <span key={index}>{props.guessedLetters.includes(letter) ? letter.toUpperCase() : " "}</span>)
        return (
            <section className="word-display-con">
                {letterElements}
            </section>
        )
    }

}

export default WordDisplay;