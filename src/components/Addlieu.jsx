import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../styles/addlieu.css";

function AddLieu() {
    let { id } = useParams();
    const [newLieu, setNewLieu] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setTimeout(() => {
            axios
                .post(`http://localhost:4000/lieux`, {
                    endroit: newLieu,
                    departement_id: id
                })
                .then(() => {
                    setNewLieu('')
                });
        }, 500);

    };
    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }

    return (
        <form className="" onSubmit={handleSubmit}>
            <input className="add"
                onChange={(e) => setNewLieu(e.target.value)}
                type='text'
                name='text'
                placeholder="Ajouter un lieu"
                value={newLieu}
            />
            <button className="btn-add" type="submit" onClick={refreshPage}>✅</button>


        </form>
    );
};

export default AddLieu;