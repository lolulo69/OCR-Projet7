import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Slideshow from '../components/Slideshow';
import TextSlider from '../components/TextSlider';

function Room() {
    const { roomId } = useParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('../logements.json');
            const data = await response.json();
            const roomData = data.filter((item) => item.id === roomId)[0];
            setData(roomData);
            setLoading(false);
        }
        fetchData();
    }, [roomId]);

    if (loading) {
        return <Loader />;
    }

    return (
        <React.Fragment>
            <main className="room">
                <Slideshow pictures={data.pictures} />
                <div className="room__titleblock">
                    <div>
                        <h1 className="room__titleblock__title">
                            {data.title}
                        </h1>
                        <h3 className="room__titleblock__location">
                            {data.location}
                        </h3>
                    </div>
                    <div className="room__titleblock__owner">
                        <p className="room__titleblock__owner__name">
                            {data.host.name}
                        </p>
                        <img
                            className="room__titleblock__owner__img"
                            src={data.host.picture}
                            alt={data.host.name}
                        />
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
