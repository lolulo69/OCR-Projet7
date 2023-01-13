import Logo from '../../images/logoWhite.png';

function Footer() {
    return (
        <footer className="footer">
            <img
                className="footer__img"
                src={Logo}
                alt="Logo de l'entreprise Kasa"
            />
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
