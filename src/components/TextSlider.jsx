import React, { useState } from 'react';

function TextSlider({ title, text }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleIsOpen() {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <React.Fragment>
            <div onClick={toggleIsOpen} className="textSlider">
                <h3 className="textSlider__title">{title}</h3>
                <svg
                    width="25"
                    height="15"
                    viewBox="0 0 25 15"
                    fill="none"
                    transform={isOpen ? 'scale(1, -1)' : 'scale(1, 1)'}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                        fill="white"
                    />
                </svg>
            </div>
            {isOpen && (
                <div className="textContent">
                    <p className="textContent__text">{text}</p>
                </div>
            )}
        </React.Fragment>
    );
}

export default TextSlider;
