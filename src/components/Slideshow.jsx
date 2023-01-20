import React, { useState } from 'react';

/**
 * Ce composant Slideshow affiche un diaporama de photos.
 * @param {Object} props
 * @param {Array} props.pictures  - un tableau d'images à afficher dans le slideshow
 */
function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    /**
     * Handle the click event on the previous button
     */
    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(pictures.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    /**
     * Handle the click event on the next button
     */
    const handleNext = () => {
        if (currentIndex === pictures.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div
            className="slideshow"
            style={{ backgroundImage: `url(${pictures[currentIndex]})` }}
        >
            <svg
                onClick={(e) => {
                    handlePrev();
                    e.stopPropagation();
                }}
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
                    fill="white"
                />
            </svg>
            <p className="slideshow__count">{`${currentIndex + 1}/${
                pictures.length
            }`}</p>
            <svg
                onClick={(e) => {
                    handleNext();
                    e.stopPropagation();
                }}
                width="48"
                height="80"
                viewBox="0 0 48 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
                    fill="white"
                />
            </svg>
        </div>
    );
}

export default Slideshow;
