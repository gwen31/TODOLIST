import React from 'react';
import Header from '../components/Header';
import Department from '../components/Department';
import Lieu from '../components/Lieu';
import { Switch, Route } from "react-router-dom";

const Home = () => {
    return (
        <div className="navbar">
            <Header />
            <Switch>
                <Route exact path="/" component={Department} />
                <Route exact path="/departements/:id/lieux" component={Lieu} />
            </Switch>
        </div>

    );
};

export default Home;