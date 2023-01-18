import React, { useState } from 'react';

function TextSlider({ page, title, text }) {
    const [isOpen, setIsOpen] = useState(false);
    let list = false;
    if (Array.isArray(text)) {
        list = true;
    }

    return (
        <div className={`textSlider__container textSlider--${page}__container`}>
            <div
                onClick={(event) => {
                    setIsOpen(!isOpen);
                    event.stopPropagation();
                }}
                className={`textSlider textSlider--${page}`}
            >
                <h3 className={`textSlider__title textSlider--${page}__title`}>
                    {title}
                </h3>
                <svg
                    width="25"
                    height="15"
                    viewBox="0 0 25 15"
                    fill="none"
                    transform={isOpen ? 'scale(1, -1)' : 'scale(1, 1)'}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`textSlider__svg textSlider--${page}__svg`}
                >
                    <path
                        d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
                        fill="white"
                    />
                </svg>
            </div>
            {list === false && (
                <div
                    className={`textContent ${
                        isOpen && 'textContent__show'
                    } textContent--${page}`}
                >
                    <p
                        className={`textContent__text textContent--${page}__text`}
                    >
                        {text}
                    </p>
                </div>
            )}
            {list === true && (
                <div
                    className={`textContent ${
                        isOpen && 'textContent__show'
                    } textContent--${page}`}
                >
                    <ul className={`textContent__ul textContent--${page}__ul`}>
                        {text.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TextSlider;
