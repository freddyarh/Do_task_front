import Swal from 'sweetalert2';
import { types } from "../types/types";
import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase-config';
import { uiStartLoading, uiFinishLoading  } from "../actions/ui";


export const startLoginEmailPassword = ( email, password ) => {
    return ( dispatch ) => {
        dispatch( uiStartLoading() );
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(({user}) => {
            dispatch( login(user.uid, user.displayName) );
            dispatch( uiFinishLoading() );
        })
        .catch(err => {
            console.log(err)
            dispatch( uiFinishLoading() );
            Swal.fire('Error', err.message, 'error');
        })
    }
}

export const startRegisterWithEmailPassWordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( async({user}) => {
                await user.updateProfile({ displayName: name });
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => {
                console.log(err)
                Swal.fire('Error', err.message, 'error');
            })
    }
}

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
            })
    }
}

export const startFacebookLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( facebookAuthProvider )
            .then( ({user}) => {
                dispatch(login(user.uid, user.displayName));
            })
            .catch(err => {
                console.log(err)
                Swal.fire('Error', err.message, 'error');
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }

});

export const startLogout = () => {
    return async(dispatch) => {
        await firebase.auth().signOut();

        dispatch( logout() );

    }
}

export const logout = () => ({
    type: types.logout
})