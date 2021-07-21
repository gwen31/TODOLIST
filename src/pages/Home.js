import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Department from '../components/Department';

const Home = () => {
    return (
        <div className="navbar">
            <Header />
            <Navbar />
            <Department />
        </div>
    );
};

export default Home;