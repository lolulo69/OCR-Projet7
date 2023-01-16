import Navbar from './Navbar';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src={Logo}
                    alt="Logo de l'entreprise Kasa"
                />
            </Link>
            <Navbar />
        </div>
    );
}

export default Header;
