import "./NewGameButton.css"


interface NewGameButtonProps{
    gameWon: boolean
    gameOver: boolean
    handleClick: () => void
}

function NewGameButton(props: NewGameButtonProps) {
    if (props.gameWon || props.gameOver){
        return(
            <button onClick={props.handleClick} className="new-game-btn">New Game</button>
        )        
    } else {
        return null
    }
}


export default NewGameButton;