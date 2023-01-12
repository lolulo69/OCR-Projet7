import React, { useState, useEffect } from 'react';

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
                    <div className="property__card__container">
                        <h2>{item.title}</h2>
                    </div>
                </div>
            ))}
        </React.Fragment>
    );
};
export default LocationCard;
