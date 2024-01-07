import React from 'react';
import moment from 'moment';

export const JournalEntry = ({ value }) => {

    const { date } = value;
    const day = moment(date).format('dddd');
    const fullDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');

    return (
        <div className="journal__entry pointer" >
            <div
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(http://localhost:3000/journal/entriesImageFile/${ value?.image })`
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    { value.title }
                </p>
                <p className="journal__entry-content">
                    { value.description }
                </p>
            </div>
            
            <div className="journal__entry-date-box">
                <span>{ day }</span>
                <h4>{ fullDate }</h4>
            </div>
            
        </div>
    )
}
