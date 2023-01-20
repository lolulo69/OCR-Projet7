import { NavLink } from 'react-router-dom';

/**
 * Ce composant Navbar affiche une barre de navigation avec des liens vers différentes pages.
 */
function Navbar() {
    let activeClassName = 'navbar__button navbar__button--selected';
    let inactiveClassName = 'navbar__button';

    return (
        <div className="navbar">
            {/* Lien vers la page d'accueil */}
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                }
            >
                Accueil
            </NavLink>
            {/* Lien vers la page à propos */}
            <NavLink
                to="about"
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                }
            >
                A propos
            </NavLink>
        </div>
    );
}

export default Navbar;
