import React, { createContext } from 'react';
import auth from '../../../../firebase.config';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const FormContext=createContext(null)

const AuthContext = ({children}) => {
    // register
    const userRegister=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo={userRegister,userSignIn}

    return (
        <FormContext.Provider value={authInfo}>
            {children}
        </FormContext.Provider>
    );
};

export default AuthContext;