import React from 'react';
import { FiChevronLeft } from "react-icons/fi";
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import "../styles/header.css";

const Header = () => {
    return (
        <div className="Logo">
            <img src={logo} alt="logo"></img>
            <h1>Todolist Voyages</h1>
            <div>
                <Link to="/">
                    <p className="icons ">
                        <FiChevronLeft /></p>
                </Link>
            </div>
        </div>
    );
};

export default Header;