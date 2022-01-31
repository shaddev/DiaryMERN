import React from "react";
import {useNavigate} from "react-router-dom";
import logo from '../assets/create_black_24dp.svg'

const EntryCard = (props) => {

    const {title, date, id} = props.entry;
    const navigate = useNavigate();

    const navigateEdit = () => {
        navigate(`/edit/${id}`);
    }

    return(
        <div className="entryCard">
            <h3>
                {title}
            </h3>
            <h3>
                {date}
            </h3>
            <img src={logo} className="editEntry" alt="x" onClick={navigateEdit}></img>

        </div>
    )
}

export default EntryCard;