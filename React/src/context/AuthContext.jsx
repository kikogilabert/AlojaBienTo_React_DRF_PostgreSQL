import React, { useState, useEffect, useCallback } from 'react'
import JwtService from '../services/JwtService';
import AuthService from '../services/AuthService';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const Context = React.createContext({})

export function AuthContextProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [token, setToken] = useState(JwtService.getToken ? JwtService.getToken : false);
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (token) {
            AuthService.getUser()
                .then(({ data, status }) => {
                    if (status === 200) {
                        setToken(data.token);
                        setUser(data.user);
                        setIsAuth(true);
                        setIsAdmin(data.user.type === 'admin');
                        // console.log(data.user)
                        // console.log(isAuth);
                        // console.log(isAdmin);
                    }
                })
                .catch(({ error }) => {
                    logout();
                });
        }
    }, [token]);

    const logout = useCallback(() => {
        JwtService.destroyToken();
        JwtService.destroyRefreshToken();
        setUser({});
        setToken(false);
        setIsAuth(false);
        setIsAdmin(false);
        // toast.success('Loged out successfully');
        navigate('/home');
    }, []);

    return <Context.Provider value={{ user, setUser, token, setToken, isAuth, setIsAuth, isAdmin, setIsAdmin, logout }}>
        {children}
    </Context.Provider>
}

export default Context