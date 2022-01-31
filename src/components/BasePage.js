import React from "react";
import AddEntry from "./AddEntry";
import EntryList from './EntryList';



const BasePage = (props) => {
    
    return(
        <div className="basePage">
            <AddEntry />
            <EntryList entries={props.entries}/>
        </div>
    )
}

export default BasePage