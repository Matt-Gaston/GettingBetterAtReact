import "./NewGameButton.css"


interface NewGameButtonProps{
    gameWon: boolean
}

function NewGameButton(props: NewGameButtonProps) {
    if (props.gameWon){
        return(
            <button className="new-game-btn">New Game</button>
        )        
    } else {
        return null
    }
}


export default NewGameButton;