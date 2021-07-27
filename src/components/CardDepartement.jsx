import React from 'react';
import { Link } from "react-router-dom";
import "../styles/carddepartement.css";

const CardDepartement = (props) => {

    const { departement, id } = props;
    console.log("id" + departement.id);

    return (
        <div className="departement">
            <div className="card">
                <img src={departement.image} alt="image" />
                <h2>{departement.name}</h2>
                <p>{departement.region}</p>

                <Link to={`departements/${departement.id}/lieux`}>
                    <button className="list">Liste des lieux</button>
                </Link>
            </div >
        </div>
    );
};


export default CardDepartement;