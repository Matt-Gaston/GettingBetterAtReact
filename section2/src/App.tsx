import HeaderBar from "./components/HeaderBar/HeaderBar";
import Entry from "./components/Entry/Entry";
import './App.css';
import EntryData from '/src/assets/data.js';

function App() {
    const EntryArray = EntryData.map((entry) => 
        <Entry 
            img={entry.img} 
            title={entry.title} 
            country={entry.country} 
            gmapslink={entry.googleMapsLink} 
            dates={entry.dates} 
            text={entry.text}
        />
    )
    return (
        <>
            <HeaderBar />
            {EntryArray}
        </>
    )
}

export default App;