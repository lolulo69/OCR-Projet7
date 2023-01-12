import React from 'react';
import LocationCard from '../components/LocationCard';

const Home = () => {
    return (
        <React.Fragment>
            <section className="banner">
                <div className="banner__container">
                    <h1>Chez vous, partout et ailleurs</h1>
                </div>
            </section>
            <section className="property">
                <LocationCard />
                <div className="filling-empty-space-childs"></div>
                <div className="filling-empty-space-childs"></div>
            </section>
        </React.Fragment>
    );
};

export default Home;
