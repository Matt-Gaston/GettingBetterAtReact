import HeaderBar from "./components/HeaderBar/HeaderBar";
import Entry from "./components/Entry/Entry";
import './App.css';
import type { EntryProps } from "./components/Entry/Entry";
import EntryData from './assets/data';

function App() {
    const EntryArray = EntryData.map((entry: EntryProps) => 
        <Entry
            key={entry.title}
            {...entry}
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