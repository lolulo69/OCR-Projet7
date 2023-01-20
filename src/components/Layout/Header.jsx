import Navbar from './Navbar';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

/**
 * Ce composant Header affiche le logo de l'entreprise et une barre de navigation en haut de la page.
 */
function Header() {
    return (
        <div className="header">
            {/* Lien vers la page d'accueil */}
            <Link to="/">
                {/* Logo de l'entreprise */}
                <img
                    className="header__logo"
                    src={Logo}
                    alt="Logo de l'entreprise Kasa"
                />
            </Link>
            {/* Barre de navigation */}
            <Navbar />
        </div>
    );
}

export default Header;
