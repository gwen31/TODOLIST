import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import "../styles/addlieu.css";

function AddLieu() {
    const [newLieu, setNewLieu] = useState('');

    axios
        .post('http://localhost:4000/lieux',)

        .then(() => {
            setNewLieu("");
            AddLieu();
        });
    const handleSubmit = e => {
        e.preventDefault();

    };
    return (
        <form className="" onSubmit={(e) => handleSubmit(e)}>
            <input className="add"
                onChange={(e) => setNewLieu(e.target.value)}
                type='text'
                name='text'
                placeholder="Ajouter une lieu"
                value={newLieu}
            />
            <input className="btn-add" type="submit" value="✅" />
        </form>
    );
};

export default AddLieu;