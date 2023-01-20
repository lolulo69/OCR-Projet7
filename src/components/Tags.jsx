import React from 'react';

/**
 * Ce composant Tags affiche une liste de tags dans des éléments div.
 *
 * @component
 * @param {string[]} tags - la liste de tags à afficher
 * @returns {JSX.Element} - un div contenant les tags comme éléments enfants
 */
function Tags({ tags }) {
    return (
        <div className="tagsContainer">
            {tags.map((item) => (
                <div key={item} className="tagsContainer__tag">
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Tags;
