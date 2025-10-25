import "./KeyboardButtons.css"
import { clsx } from "clsx"


interface KeyboardButtonsProps{
    alphabet: string[],
    secretWord:string,
    guessedLetters: string[],
    handleLetterClick: (letter:string) => void
}

function KeyboardButtons(props: KeyboardButtonsProps) {
    const alphabetButtonElements = props.alphabet
                                    .map((letter) => {
                                        const bIsGuessed = props.guessedLetters.includes(letter);
                                        const bWordIncludes = props.secretWord.includes(letter);
                                        return(
                                            <button 
                                                key={letter}
                                                onClick={() => props.handleLetterClick(letter)}
                                                className={
                                                    clsx(
                                                        bIsGuessed && bWordIncludes && "correct-guess",
                                                        bIsGuessed && !bWordIncludes && "incorrect-guess",
                                                        !bIsGuessed && "not-guessed"
                                                    )}
                                            >{letter.toUpperCase()}</button>
                                        )
                                    })

    return(
        <section className="keyboard-button-con">
            {alphabetButtonElements}
        </section>
    )
}

export default KeyboardButtons;