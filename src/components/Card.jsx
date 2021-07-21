import React from 'react';
import "../styles/card.css";

const CardDepartment = (props) => {
    const { departement } = props;
    return (
        <div className="card">
            <img src={departement.image} alt="image" />
            <h2>{departement.name}</h2>
            <p>{departement.region}</p>
            <button className="list">Liste des lieux</button>
        </div>
    );
};


export default CardDepartment;