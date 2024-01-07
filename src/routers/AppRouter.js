import React, { useEffect, useState } from 'react'
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import {
    BrowserRouter as Router,
    Switch
  } from "react-router-dom"; 

  import { PrivateRoute } from './privateRoute';
  import { PublicRoute } from './publicRoute'; 

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {
            //Si no estoy registrado, user regresa un null
            if( user?.uid ){
                dispatch( login(user.uid, user.displayName) );
                setIsLoggedIn(true);
            }else{
                setIsLoggedIn(false);
            }

            setChecking(false);
        });

    }, [dispatch, setChecking])

    if( checking ) {
        return (
            // <h1>Wait...</h1>
            <CircularProgress color="secondary" />
            
        )
    }
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={ AuthRouter } 
                        isAuthenticated={ isLoggedIn }
                    />

                    <PrivateRoute 
                        exact
                        path="/" 
                        component={ JournalScreen } 
                        isAuthenticated={ isLoggedIn }
                    />
                    {/* <Route path="/auth" component={ AuthRouter } />
                    <Route exact path="/" component={ JournalScreen } />      
                    <Redirect to="/auth/login" />  */}
                </Switch>            
            </div>
        </Router>
    )
}
