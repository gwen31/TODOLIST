import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import CardDepartement from "../components/CardDepartement";


const Search = () => {
    const [searchDepartement, setSearchDepartement] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
        axios
            .get('http://localhost:4000/departements')
            .then((res) => setData(res.data));
        console.log(setData);
    }, []);

    const handleSearch = (e) => {
        let value = e.target.value;
        value.length > 2 && setSearchDepartement(value);
    }
    return (
        <div>
            <div className="department">
                <input
                    type="text"
                    name="searchbar"
                    id="serachbar"
                    placeholder="Rechercher"
                    onChange={handleSearch} />
            </div>
            <div className="carddep">
                {data
                    .filter((val) => {
                        return val.name.includes(searchDepartement);
                    })
                    .map((departement) => (
                        <CardDepartement key={departement.id} departement={departement} />
                    ))}
            </div>
        </div>
    );
};

export default Search;