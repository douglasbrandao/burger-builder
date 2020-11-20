import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBD3-PPJ55ZpVUWxd1mHv1jsPPzEdPJWQ';

        if (!isSignUp) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBD3-PPJ55ZpVUWxd1mHv1jsPPzEdPJWQ';
        }

        axios.post(url, data)
        .then(response => {
            console.log(response);
            dispatch(authSuccess(response.data));
        })
        .catch(error => {
            console.log(error);
            dispatch(authFail(error));
        })
    }
}