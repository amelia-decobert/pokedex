import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            {/* <a href="/auth">Connexion</a> */}
            <Link to="/dashboard">Tableau de Bord</Link>
            <Link to="/pokemon">Pokémon</Link>
            <Link to="/types">Types</Link>
            <Link to="/teams">Équipes</Link>
        </nav>
    )
}

export default Navbar;