import "./NewGameButton.css"


interface NewGameButtonProps{
    gameWon: boolean
    gameOver: boolean
}

function NewGameButton(props: NewGameButtonProps) {
    if (props.gameWon || props.gameOver){
        return(
            <button className="new-game-btn">New Game</button>
        )        
    } else {
        return null
    }
}


export default NewGameButton;