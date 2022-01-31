import React from "react";
import {useNavigate} from "react-router-dom"

const Heading = () => {

    const navigate = useNavigate()

    const navigateHome = () => {
        navigate("/")
    }

    return (
        
        <div className="heading" onClick={navigateHome}>
            <h1>
                Dear Diary...
            </h1>
            <hr></hr>
        </div>
        
    )
}

export default Heading