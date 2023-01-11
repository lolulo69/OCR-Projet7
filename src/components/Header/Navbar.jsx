import { NavLink } from 'react-router-dom';

function Navbar() {
    let activeClassName = 'navbar__button navbar__button--selected';
    let inactiveClassName = 'navbar__button';

    return (
        <div className="navbar">
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? activeClassName : inactiveClassName
                }
            >
                Accueil
            </NavLink>
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
