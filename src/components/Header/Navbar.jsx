import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <Link className="navbar__button" to="/">
                Accueil
            </Link>
            <Link className="navbar__button" to="about">
                A propos
            </Link>
        </div>
    );
}

export default Navbar;
