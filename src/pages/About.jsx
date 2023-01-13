import React from 'react';
import Banner from '../components/Banner';
import AboutTextSliders from '../components/AboutTextSliders';

function About() {
    return (
        <React.Fragment>
            <Banner bannerLocation="about" />
            <AboutTextSliders />
        </React.Fragment>
    );
}

export default About;
