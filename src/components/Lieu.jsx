import React from 'react';
import axios from 'axios';
import CardLieu from "../components/CardLieu";
import AddLieu from '../components/Addlieu';
import { useState, useEffect } from 'react';

const Lieu = () => {
    const [lieudata, setLieuData] = useState([]);
    ;

    useEffect(() => {
        axios
            .get(`http://localhost:4000/departements/1/lieux`)
            .then((res) => setLieuData(res.data));

    }, []);

    return (
        <div>
            <AddLieu />
            {lieudata.map((lieu) => (
                <CardLieu lieu={lieu} key={lieu.endroit} />
            ))}
        </div>
    );
};

export default Lieu;