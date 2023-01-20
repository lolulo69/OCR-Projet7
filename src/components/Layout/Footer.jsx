import Logo from '../../images/logoWhite.png';

/**
 * Ce composant Footer affiche le logo de l'entreprise et les informations de copyright en bas de la page.
 */
function Footer() {
    return (
        <footer className="footer">
            {/* Logo de l'entreprise */}
            <img
                className="footer__img"
                src={Logo}
                alt="Logo de l'entreprise Kasa"
            />
            {/* Informations de copyright */}
            <p className="footer__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
