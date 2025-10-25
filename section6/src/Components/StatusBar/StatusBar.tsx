import clsx from "clsx";

import "./StatusBar.css";
import { getFarewellText } from "./utils";


interface StatusBarProps{
    gameWon: boolean,
    gameOver: boolean,
    showFarewell: [bShowFarewll:boolean, language:string]
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
        <section 
            className={clsx(
                "status-message-con",
                props.gameWon && "game-won",
                props.gameOver && "game-lost",
                props.showFarewell[0] && "wrong-letter"
                )
            }
            aria-live="polite"
            role="status">
            {props.gameWon ? 
                winMessage : 
                props.gameOver ? 
                    loseMessage :
                    props.showFarewell[0] ? 
                        <p>{getFarewellText(props.showFarewell[1])}</p> :
                        null
            }
        </section>
    )
}


export default StatusBar;