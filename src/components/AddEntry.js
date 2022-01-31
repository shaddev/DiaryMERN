import React from "react";
import logo from '../assets/add_circle_black_24dp.svg';
import {useNavigate} from 'react-router-dom';

const AddEntry = () => {
    let navigate = useNavigate();

    const navigateEntry = () => {
        navigate('/create')
    }

    return (
        <div className="addEntry">
            <p >
                <span className="addEntryHeading">
                    Something on your mind?
                </span>
                <img src={logo} alt="no" className="createLogo" onClick={navigateEntry}></img>
            </p>            
            
        </div>
    )
}

export default AddEntry;