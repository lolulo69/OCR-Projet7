import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Slideshow from '../components/Slideshow';
import TextSlider from '../components/TextSlider';
import Tags from '../components/Tags';
import Stars from '../components/Stars';

/**
 * @module Room
 * @desc Ce composant affiche les détails d'une propriété en utilisant les informations de l'ID de la propriété passé dans l'URL.
 * Il utilise des hooks React `useParams`, `useState` et `useEffect` pour gérer l'état de la page et récupérer les données de l'API.
 * Il utilise également des composants tels que `Loader`, `Slideshow`, `TextSlider`, `Tags` et `Stars` pour afficher les détails de la propriété.
 * @param {string} roomId - ID de la propriété à afficher
 * @returns {React.Fragment} - Rendu du composant
 */
function Room() {
    const { roomId } = useParams();

    /**
     * @const {Array} data - Etat contenant les données de la propriété
     * @const {Function} setData - Fonction pour mettre à jour l'état data
     */
    const [data, setData] = useState([]);

    /**
     * @const {boolean} loading - Etat indiquant si les données de la propriété sont en cours de chargement
     * @const {Function} setLoading - Fonction pour mettre à jour l'état loading
     */
    const [loading, setLoading] = useState(true);

    /**
     * @const {boolean} productExist - Etat indiquant si la propriété existe ou non
     * @const {Function} setProductExist - Fonction pour mettre à jour l'état productExist
     */
    const [productExist, setProductExist] = useState(true);

    /**
     * @desc Utilise l'effet useEffect pour récupérer les données de la propriété en utilisant l'ID de la propriété contenu dans l'URL
     * @param {Function} fetchData - Fonction pour récupérer les données de l'API
     * @param {Array} [roomId] - Dépendance pour le re-rendu de l'effet, pour mettre à jour les données lorsque l'ID de la propriété change
     */
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('../logements.json');
            const data = await response.json();
            const roomData = data.filter((item) => item.id === roomId)[0];
            if (roomData === undefined) {
                setLoading(false);
                return setProductExist(false);
            }
            setData(roomData);
            setLoading(false);
        }
        fetchData();
    }, [roomId]);

    if (!productExist) {
        return <Navigate to="../Error" />;
    }

    if (loading) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <main className="room">
                <Slideshow pictures={data.pictures} />
                <div className="room__sidesContainer">
                    <div className="room__leftSide">
                        <h1 className="room__leftSide__title">{data.title}</h1>
                        <h3 className="room__leftSide__location">
                            {data.location}
                        </h3>
                        <Tags tags={data.tags} />
                    </div>
                    <div className="room__rightSide">
                        <div className="room__rightSide__owner">
                            <p className="room__rightSide__owner__name">
                                {data.host.name}
                            </p>
                            <img
                                className="room__rightSide__owner__img"
                                src={data.host.picture}
                                alt={data.host.name}
                            />
                        </div>
                        <Stars rating={data.rating} />
                    </div>
                </div>
                <div className="room__sliderContainer">
                    <TextSlider
                        page="room"
                        title="Description"
                        text={data.description}
                    />
                    <TextSlider
                        page="room"
                        title="Équipements"
                        text={data.equipments}
                    />
                </div>
            </main>
        </React.Fragment>
    );
}

export default Room;
