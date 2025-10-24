import "./Dice.css";

interface DiceProps {
    value: number;
}

function Dice(props: DiceProps) {
    return (
        <button>{props.value}</button>
    )
}


export default Dice;