import axios from "axios";
import { useState } from "react";
import "../styles/cardlieu.css";

const CardLieu = (props,) => {
    const { lieu, id } = props;
    const [isActive, setIsActive] = useState(true);

    const handleClick = () => {
        setIsActive(!isActive)
    }
    function refreshPage() {
        setTimeout(() => {
            window.location.reload(false);
        }, 500);
    }
    const handleDelete = () => {
        axios
            .delete(`http://localhost:4000/lieux/${id}`);
    }
    return (
        <div>
            <div className="card-lieu">
                <div className="list-lieu">
                    <h4 style={isActive ? { color: 'black' } : { color: 'green' }}>{lieu.endroit}</h4>
                    <div className="btn">
                        <button className="" onClick={handleClick}>👍</button>
                        <button className=""
                            onClick={() => {
                                if (window.confirm("Voulez-vous supprimer ce lieu ?"))
                                    handleDelete();
                                refreshPage();
                            }}>❌</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CardLieu;