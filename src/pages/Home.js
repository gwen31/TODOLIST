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
                <Route exact path="/" component={Department}>
                    <Department />
                </Route>
                <Route exact path="/lieu" component={Lieu}>
                    <Lieu />
                </Route>
            </Switch>

        </div>

    );
};

export default Home;