import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardLieu from "../components/CardLieu";
import AddLieu from '../components/Addlieu';
import { useState, useEffect } from 'react';
import "../styles/lieu.css";

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
        <div className="input-lieu">
            <AddLieu />
            <div className="cardlieu">
                {lieudata.map((lieu) => (
                    <CardLieu id={lieu.id} lieu={lieu} />
                ))}
            </div>

        </div>
    );
};

export default Lieu;