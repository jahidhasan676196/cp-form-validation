import React, { useContext } from 'react';
import { FormContext } from './Layout/AuthContext/AuthContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {userR}=useContext(FormContext)
    if(userR){
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;