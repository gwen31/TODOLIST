import React from 'react';

import "../styles/cardlieu.css";


const CardLieu = (props,) => {
    const { lieu } = props;
    return (
        <div>
            <div className="card-lieu">
                <div className="list-lieu">
                    <h4>{lieu.endroit}</h4>
                    <div className="btn">
                        <button className="">👍</button>
                        <button className="">❌</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardLieu;