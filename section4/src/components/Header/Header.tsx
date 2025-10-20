import trollFace from "/src/images/troll-face.png"
import "./Header.css"

function Header() {
    return (
        <header className="header">
            <img 
                src={trollFace} 
            />
            <h1>Meme Generator</h1>
        </header>
    )
}

export default Header;