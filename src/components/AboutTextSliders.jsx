import React from 'react';
import { textList } from '../datas/textList';
import TextSlider from './TextSlider';

function AboutTextSliders() {
    return (
        <React.Fragment>
            {textList.map((item) => (
                <TextSlider
                    key={item.title}
                    page="about"
                    title={item.title}
                    text={item.text}
                />
            ))}
        </React.Fragment>
    );
}

export default AboutTextSliders;
