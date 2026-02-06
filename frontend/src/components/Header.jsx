import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <h1><Link to="/pokemon">Pokédex</Link> <span>ポケモン図鑑</span></h1>
            <div className="logo">
                <img src="/images/logo.png" alt=""/>
            </div>
        </header>
    )
}

export default Header;