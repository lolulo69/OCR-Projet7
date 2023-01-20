import React, { useState, useEffect } from 'react';

/**
 * Ce composant Stars affiche une note avec un certain nombre d'étoiles pleines et vides.
 *
 * @component
 * @param {number} rating - la valeur de la note (entre 0 et 5)
 * @returns {JSX.Element} - un div contenant les étoiles remplies et vides
 */
function Stars({ rating }) {
    const emptyStar = '#E3E3E3';
    const fullStar = '#FF6060';

    const [data, setData] = useState(Array(5).fill(emptyStar));

    /**
     * Rempli les étoiles en fonction de la note
     */
    useEffect(() => {
        const newData = Array(5).fill(emptyStar);
        for (let i = 0; i < rating; i++) {
            newData[i] = fullStar;
        }
        setData(newData);
    }, [rating]);

    return (
        <div className="starsContainer">
            {data.map((item, index) => (
                <svg
                    key={index}
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z"
                        fill={item}
                    />
                </svg>
            ))}
        </div>
    );
}

export default Stars;
