import React from 'react';
import LocationCard from '../components/LocationCard';
import Banner from '../components/Banner';

/**
 * @module Home
 * @desc Ce composant affiche un composant `Banner` avec un titre personnalisé et un composant `LocationCard` pour créer la page d'accueil de l'application.
 * Il utilise un `React.Fragment` pour contenir les deux composants enfants sans ajouter de noeud supplémentaire à l'arbre de rendu.
 * Il utilise également des éléments de remplissage vides pour remplir l'espace vide de la page.
 * @returns {React.Fragment} - Rendu du composant
 */
const Home = () => {
    return (
        <React.Fragment>
            <Banner bannerLocation="home">
                <h1>Chez vous, partout et ailleurs</h1>
            </Banner>
            <section className="property">
                <LocationCard />
                <div className="filling-empty-space-childs"></div>
                <div className="filling-empty-space-childs"></div>
            </section>
        </React.Fragment>
    );
};

export default Home;
