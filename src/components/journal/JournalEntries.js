import React, { useEffect, useState } from 'react'
import { JournalEntry } from './JournalEntry';
import axios from 'axios';

export const JournalEntries = ({ getData }) => {

    const [entryData, setEntryData] = useState(null);

    useEffect(() => {
        loadEntriesData();
    }, [])

    const loadEntriesData = async() => {
        return await axios.get('http://localhost:3000/journal/entries')
            .then(function (res) {
            setEntryData(res.data);
            
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    if(!entryData) return null;
    
    return (
        <div className="journal__entries">

        <div className="journal__entry pointer" >
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(http://localhost:3000/journal/entriesImageFile/no_image)`
                }}
            ></div>

                <div className="journal__entry-body">
                    <p className="journal__entry-title">
                        This is the title
                    </p>
                    <p className="journal__entry-content">
                        This is the description
                    </p>
                </div>
                
                <div className="journal__entry-date-box">
                    <span>dfg</span>
                    <h4>dfg</h4>
                </div>
                
            </div>
           
           {
                entryData.entries.reverse().map( (value, index) => (
                    <JournalEntry key={ index } value={ value } />
                ))
           }

        </div>
    )
}
