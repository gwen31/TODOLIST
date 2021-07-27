import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import CardDepartement from "../components/CardDepartement";

import "../styles/departement.css";


const Department = () => {
    const [data, setData] = useState([]);
    const [selectedRegion, setSelectedRegion] = useState('');
    const regions = ["Occitanie", "Bretagne", "Pays de la Loire", "Nouvelle Aquitaine", "Provence Côte d’Azur"];

    useEffect(() => {
        axios
            .get('http://localhost:4000/departements')
            .then((res) => setData(res.data));
        console.log(setData);
    }, []);

    return (
        <div className="department">
            <div className="department-list">
                <ul className="checkbox">
                    {regions.map((region) => {
                        return (
                            <li key={region}>
                                <input type="radio" value={region} id={region}
                                    checked={region === selectedRegion}
                                    onChange={(e) => setSelectedRegion(e.target.value)} />
                                <label htmlFor={region}>{region}</label>
                            </li>
                        )
                    })}
                </ul>
                <div className="cancel">
                    {selectedRegion && <h5 onClick={() => setSelectedRegion("")}>Annuler recherche</h5>}
                </div>
                {data.filter((departement) => departement.region.includes(selectedRegion))
                    .map((departement) => (
                        <CardDepartement key={departement.id} departement={departement} />
                    ))}
            </div>

        </div>
    );
};

export default Department;
