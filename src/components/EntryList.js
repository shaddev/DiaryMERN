import React from "react";
import EntryCard from './EntryCard';

const EntryList = (props) => {

    const displayEntries = props.entries.map((entry) => {
                return(
                    <EntryCard entry={entry} />
                )
            })

    return (

        <div>
            <h2>
                Your entries
            </h2>
            {displayEntries}
        </div>
    )
    
}

export default EntryList;