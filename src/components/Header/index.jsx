import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Logo from '../../images/logo.png';
import '../../styles/_header.scss';

function Header() {
    return (
        <div>
            <div className="header">
                <img src={Logo} alt="Logo de l'entreprise Kasa" />
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
}

export default Header;
