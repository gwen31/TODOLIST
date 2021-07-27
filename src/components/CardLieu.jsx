import { useState } from "react";
import axios from 'axios';
import "../styles/cardlieu.css";

const CardLieu = (props,) => {
    const { lieu } = props;
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive)
    }
    axios
        .delete("http://localhost:4000/lieux");




    return (
        <div>
            <div className="card-lieu">
                <div className="list-lieu">
                    <h4 style={isActive ? { color: 'black' } : { color: 'green' }}>{lieu.endroit}</h4>
                    <div className="btn">
                        <button className="" onClick={handleClick}>👍</button>
                        <button className="">❌</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardLieu;