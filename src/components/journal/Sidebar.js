import React, { useState } from 'react';
import moment from 'moment';
import { JournalEntries } from './JournalEntries';
import CustomizedDialogs from '../modal/ModalDialog';

export const Sidebar = () => {

    const date = moment().format('MMMM Do YYYY');

    const [getData, setGetData] = useState(false);

    const loadDataEntries = () => {
        setGetData(prev => !prev);
    }

    return (
        <div>
            <aside className="journal__sidebar">
                
                <div className="journal__sidebar-navbar">
                    <h3 className="mt-1">
                        <i className="far fa-moon"></i>
                        <span> Here are all your entries!!</span>
                    </h3>
                    <span style={{ padding: "20px" }}>{ date }</span>        
                </div>
                <div className="journal__new-entry">
                    <CustomizedDialogs loadDataEntries={ loadDataEntries }/>
                </div>
                <JournalEntries getData={ getData } />
            </aside>
        </div>
    )
}
