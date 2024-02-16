import React, { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from "react-router-dom";

import AuthContext from '../../context/AuthContext';
import AuthService from '../AuthService';

function AuthGuard() {

    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);


    return isAuth ? <Outlet/> : <Navigate to="/login"/>
}

export default AuthGuard;