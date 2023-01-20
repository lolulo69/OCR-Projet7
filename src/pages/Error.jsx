import { Link } from 'react-router-dom';

/**
 * @module Error
 * @desc Ce composant affiche un message d'erreur lorsque l'utilisateur accède à une page qui n'existe pas
 * Il utilise un composant React Router <Link> pour créer un lien vers la page d'accueil
 * @returns {React.Fragment} - Rendu du composant
 */
function Error() {
    return (
        <section className="error">
            <h1 className="error__title">404</h1>
            <h3 className="error__subtitle">
                Oups! La page que vous demandez n'existe pas.
            </h3>
            {/* Lien vers la page d'accueil */}
            <Link className="error__link" to="/">
                Retourner sur la page d'accueil
            </Link>
        </section>
    );
}

export default Error;
