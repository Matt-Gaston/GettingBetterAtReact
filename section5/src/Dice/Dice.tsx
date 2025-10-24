import "./Dice.css";

interface DiceProps {
    value: number;
    isHeld: boolean;
    holdFunc: () => void;
}

function Dice(props: DiceProps) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#e9e9ed"
    }

    return (
        <button onClick={props.holdFunc} style={styles}>{props.value}</button>
    )
}


export default Dice;