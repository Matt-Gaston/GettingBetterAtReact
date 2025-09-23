import ClankerChefLogo from "/src/assets/chef-claude-icon.png";
import './Header.css';

function Header() {
    return (
        <header>
            <img src={ClankerChefLogo} />
            <h1>Clanker Chef</h1>
        </header>
    )
}

export default Header;