import React, { useEffect, useRef } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import { gsap } from 'gsap';

import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';

export const AuthRouter = () => {

    const elementReference = useRef(null);

    useEffect(() => {
        console.log('we charge');
    
        const tl = gsap.timeline();
    
          tl.to( elementReference.current, { y: -10, duration: 0.2, ease: 'easeOut' })
          tl.to( elementReference.current, { y: 0, duration: 1, ease: 'bounce.out' })
      }, [])

    return (
        <div className="auth__main">
            <div ref={ elementReference } className="auth__box-container">
            <Switch>
                <Route 
                    exact
                    path="/auth/login"
                    component={ LoginScreen }
                />

                <Route 
                    exact
                    path="/auth/register"
                    component={ RegisterScreen }
                />

                <Redirect to="/auth/login" />
            </Switch>
            </div>
        </div>
        
    )
}
