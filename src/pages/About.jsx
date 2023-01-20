import React from 'react';
import Banner from '../components/Banner';
import AboutTextSliders from '../components/AboutTextSliders';

/**
 * Ce composant affiche un composant `Banner` et un composant `AboutTextSliders` pour créer la page "À propos" de l'application.
 * Il utilise un `React.Fragment` pour contenir les deux composants enfants sans ajouter de noeud supplémentaire à l'arbre de rendu.
 */
function About() {
    return (
        <React.Fragment>
            <Banner bannerLocation="about" />
            <AboutTextSliders />
        </React.Fragment>
    );
}

export default About;
