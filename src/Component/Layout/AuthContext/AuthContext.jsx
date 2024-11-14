import React, { createContext, useEffect, useState } from 'react';
import auth from '../../../../firebase.config';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import {  signInWithPopup,  } from "firebase/auth";
import {  signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";


export const FormContext=createContext(null)


const AuthContext = ({children}) => {
    const [userR,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();



    // register
    const userRegister=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }
    // login
    const userSignIn=(email,password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    // goole login
    const userGoogleAuthentication=()=>{
       return signInWithPopup(auth,googleProvider )
    }
    // sign out
    const userSignOut=()=>{
     return   signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
          
    }

    // current user
    useEffect(()=>{
       const unsubcribe= onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                setUser(user)
            } else {
                console.log('logged out');
            }
          });
          return ()=>{
            unsubcribe()
          }
    },[])




    const authInfo={
        userRegister,
        userSignIn,
        userGoogleAuthentication,
        setUser,
        userSignOut,
        userR
        
    }

    return (
        <FormContext.Provider value={authInfo}>
            {children}
        </FormContext.Provider>
    );
};

export default AuthContext;