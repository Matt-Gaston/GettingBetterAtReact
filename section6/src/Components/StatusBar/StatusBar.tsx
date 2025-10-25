import clsx from "clsx";
import "./StatusBar.css";


interface StatusBarProps{
    gameWon: boolean,
    gameOver: boolean
}

function StatusBar(props: StatusBarProps) {
    const winMessage = <>
                            <h2>You win!</h2>
                            <p>Well done 🎉</p>
                        </>

    const loseMessage = <>
                            <h2>Game over!</h2>
                            <p>You lose! Better start learning Assembly 😢</p>
                        </>
    return(
        <section className={clsx(
            "status-message-con",
            props.gameWon && "game-won",
            props.gameOver && "game-lost"
        )}>
            {props.gameWon ? 
                winMessage : 
                props.gameOver ? 
                    loseMessage :
                    null 
            }
        </section>
    )
}


export default StatusBar;