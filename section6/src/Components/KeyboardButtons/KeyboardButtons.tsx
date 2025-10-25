import "./KeyboardButtons.css"


interface KeyboardButtonsProps{
    alphabet: string
}

function KeyboardButtons(props: KeyboardButtonsProps) {
    const alphabetButtonElements = props.alphabet.split("").map((letter, index) => <button key={index}>{letter.toUpperCase()}</button>)

    return(
        <section className="keyboard-button-con">
            {alphabetButtonElements}
        </section>
    )
}

export default KeyboardButtons;