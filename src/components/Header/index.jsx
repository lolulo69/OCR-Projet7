import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from '../../images/logo.png';

function Header() {
    return (
        <div>
            <div className="header">
                <img
                    className="header__logo"
                    src={Logo}
                    alt="Logo de l'entreprise Kasa"
                />
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
}

export default Header;
