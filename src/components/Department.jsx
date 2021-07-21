import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";

const Department = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:4000/departements')
            .then((res) => setData(res.data));
        console.log(setData);
    }, []);

    return (
        <div className="department">
            <div className="department-list">
                {data.map((departement) => (
                    <li>{departement.name}</li>
                ))}
            </div>

        </div>
    );
};

export default Department;