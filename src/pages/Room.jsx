import { useParams, Navigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Slideshow from '../components/Slideshow';
import TextSlider from '../components/TextSlider';
import Tags from '../components/Tags';
import Stars from '../components/Stars';

function Room() {
    const { roomId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productExist, setProductExist] = useState(true);

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
