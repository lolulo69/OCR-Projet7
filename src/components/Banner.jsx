/**
 * Ce composant Banner affiche une bannière différente en fonction de la page et affiche les éléments children.
 *
 * @component
 * @param {string} bannerLocation - la page sur laquelle la bannière est affichée (e.g. "home", "about", etc.)
 * @param {JSX.Element | JSX.Element[]} children - les éléments children à afficher dans la bannière
 * @returns {JSX.Element} - Un élément React section avec la bannière et les éléments children
 */
function Banner({ bannerLocation, children }) {
    return (
        <section className={`banner banner--${bannerLocation}`}>
            <div className="banner__container">{children}</div>
        </section>
    );
}

export default Banner;
