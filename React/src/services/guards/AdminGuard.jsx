import React, { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
import AuthService from '../AuthService';

function AdminGuard() {
    const navigate = useNavigate();
    const { isAdmin } = useContext(AuthContext);

    // if (!isAdmin) {
    //     AuthService.getUser()
    //         .then(({ data, status }) => {
    //             if (status == 200) {
    //                 if (data.user.type == "admin") {
    //                     setTimeout(() => { navigate("/dashboard"); }, 200);
    //                 }
    //             }
    //         })
    // }

    return isAdmin ? <Outlet/> : <Navigate to="/home"/>
}

export default AdminGuard;