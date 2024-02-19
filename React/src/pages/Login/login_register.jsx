import React, { useEffect, useState } from "react";
// import SignUpForm from "../../components/Client/Login/SignUpForm";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import LoginModal from "./login_modal";

const Login = () => {
    const { isCorrect, useRegister, useLogin } = useAuth();
    const handleClose = () => setShow(false);
    const [id, setId] = useState(null);
    const [show, setShow] = useState(true);
    const form_type = 'login';
    const navigate = useNavigate();

    useEffect(() => {
        if (isCorrect) {
            navigate('/home');
        }
    }, [isCorrect, navigate]);

    useEffect(() => {
    // setShow(true);
    // console.log(show);
    }, []);


    const emit_register = (userData) => {
        // console.log(userData.username, userData.email, userData.password);
        useRegister(userData);
    }

    const emit_login = (userdata) => {
            // console.log(userdata.username, userdata.password);
            useLogin(userdata);
    }

    return (
        <>
        <br />
        <br />
        <br />
        <br />
            <h1>Register</h1>
            <LoginModal form_type={form_type} show={show} onAddUser={emit_register} onLoginUser={emit_login} handleClose={handleClose} />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
    )
}

export default Login;