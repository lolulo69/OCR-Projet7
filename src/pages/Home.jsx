import React from 'react';
import LocationCard from '../components/LocationCard';
import Banner from '../components/Banner';

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
