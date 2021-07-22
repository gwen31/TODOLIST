import React from 'react';
import { Link } from "react-router-dom";
import "../styles/card.css";

const CardDepartment = (props) => {
    const { departement } = props;

    return (
        <div className="card">
            <img src={departement.image} alt="image" />
            <h2>{departement.name}</h2>
            <p>{departement.region}</p>

            <Link to="/lieu">
                <button className="list">Liste des lieux</button>
            </Link>
        </div>
    );
};


export default CardDepartment;