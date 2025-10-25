import "./StatusBar.css";

function StatusBar() {
    const winMessage = <>
                            <h2>You win!</h2>
                            <p>Well done 🎉</p>
                        </>

    const loseMessage = <>
                            <h2>Game over!</h2>
                            <p>You lose! Better start learning Assembly 😢</p>
                        </>
    return(
        <section className="status-message-con">
            {winMessage}
        </section>
    )
}


export default StatusBar;