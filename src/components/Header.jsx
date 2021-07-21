import React from 'react';
import logo from '../assets/logo.png';
import "../styles/header.css";

const Header = () => {
    return (
        <div className="Logo">
            <img src={logo} alt="logo"></img>
            <h1>Todolist  Voyages</h1>
        </div>
    );
};

export default Header;