import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardLieu from "../components/CardLieu";
import AddLieu from '../components/Addlieu';
import { useState, useEffect } from 'react';

const Lieu = () => {
    let { id } = useParams();
    const [lieudata, setLieuData] = useState([]);
    console.log(lieudata);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/departements/${id}/lieux`)
            .then((res) => setLieuData(res.data));
    }, [id]);

    return (
        <div>
            <AddLieu />
            {lieudata.map((lieu) => (
                <CardLieu key={lieu.id} lieu={lieu} />
            ))}
        </div>
    );
};

export default Lieu;