import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';

/**
 * Le composant LocationCard affiche une liste de propriétés à louer en forme de cards.
 *
 * @returns {JSX.Element} - Un React Fragment contenant les cards des propriétés à afficher
 */
const LocationCard = () => {
    /**
     * Données des propriétés
     * @type {Array<{id: number, title: string, cover: string}>}
     */
    const [data, setData] = useState([]);
    /**
     * Etat de chargement
     * @type {Boolean}
     */
    const [loading, setLoading] = useState(true);

    /**
     * Fetch des données des propriétés depuis un fichier JSON et mise à jour du state
     *
     * @returns {Promise<void>}
     */
    useEffect(() => {
        // Simulation d'un temps de chargement
        setTimeout(() => {
            setLoading(false);
        }, 3000);
        async function fetchData() {
            const response = await fetch('logements.json');
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, []);

    /**
     * Si l'état de chargement est à true, on affiche le Loader
     */
    if (loading) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            {data.map((item) => (
                <div
                    className="property__card"
                    key={item.id}
                    style={{ backgroundImage: `url(${item.cover})` }}
                >
                    {/* Lien vers la page de la propriété */}
                    <Link to={`/room/${item.id}`}>
                        <div className="property__card__container">
                            <h2>{item.title}</h2>
                        </div>
                    </Link>
                </div>
            ))}
        </React.Fragment>
    );
};
export default LocationCard;
