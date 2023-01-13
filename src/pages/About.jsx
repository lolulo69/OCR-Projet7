import React from 'react';
import Banner from '../components/Banner';
import TextSlider from '../components/TextSlider';

function About() {
    return (
        <React.Fragment>
            <Banner bannerLocation="about" />
            <TextSlider />
        </React.Fragment>
    );
}

export default About;
