import Navbar from './Navbar';
import Logo from '../../images/logo.png';

function Header() {
    return (
        <div className="header">
            <img
                className="header__logo"
                src={Logo}
                alt="Logo de l'entreprise Kasa"
            />
            <Navbar />
        </div>
    );
}

export default Header;
