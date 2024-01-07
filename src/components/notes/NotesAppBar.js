import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from '../../actions/auth';

export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const userName = useSelector( state => state.auth.name);

    const handleLogOut = () => {
        console.log("first")
        dispatch( startLogout() );
    }


    return (
        <div className="notes__appbar">
            <span>Welcome { userName } </span>            

            <div>
                <button className="btn" onClick={handleLogOut}>
                    Logout
                </button>
            </div>
        </div>
    )
}
