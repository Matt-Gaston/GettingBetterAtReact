import HeaderBar from "./components/HeaderBar/HeaderBar";
import Entry from "./components/Entry/Entry";
import './App.css';
import type { EntryProps } from "./components/Entry/Entry";
import EntryData from './assets/data';

function App() {
    const EntryArray = EntryData.map((entry: EntryProps) => 
        <Entry
            key={entry.key}
            img={entry.img} 
            title={entry.title} 
            country={entry.country} 
            googleMapsLink={entry.googleMapsLink} 
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