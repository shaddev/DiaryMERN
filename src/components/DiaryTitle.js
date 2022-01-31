import React from "react";


const DiaryTitle = (props) => {

    return(
        <div>
            <h2>Title</h2>
            <input className="titleInput" value={props.titleText} onChange={(e) => {props.titleHandler(e.target.value)}}></input>
        </div>
    )
}

export default DiaryTitle;
