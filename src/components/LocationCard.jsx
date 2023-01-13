import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LocationCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('logements.json');
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, []);

    return (
        <React.Fragment>
            {data.map((item) => (
                <div
                    className="property__card"
                    key={item.id}
                    style={{ backgroundImage: `url(${item.cover})` }}
                >
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
