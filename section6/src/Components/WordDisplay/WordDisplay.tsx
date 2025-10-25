

import "./WordDisplay.css";


interface WordDisplayProps{
    word: string
}

function WordDisplay(props: WordDisplayProps) {
    const letterElements = props.word.split("").map((letter, index) => <span key={index}>{letter.toUpperCase()}</span>)

    return(
        <section className="word-display-con">
            {letterElements}
        </section>
        
    )
}

export default WordDisplay;