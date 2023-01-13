import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';

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
            <h1>{data.title}</h1>
        </React.Fragment>
    );
}

export default Room;
