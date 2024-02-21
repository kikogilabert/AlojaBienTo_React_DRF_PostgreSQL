import React from 'react';
import HeaderCSS from  './Header.module.css';
import AuthContext from '../../context/AuthContext';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../../hooks/useAuth';
import NotificationBell from './NotificationBell';

export default function Header() {

    const navigate = useNavigate();

    const redirects = {

        home: () => navigate('/home'),
        //CLIENT
        cities: () => navigate('/cities'),
        zones: () => navigate('/zones'),
        apartments: () => navigate('/apartments'),

        //ADMIN
        admin_cities: () => navigate('/admin-cities'),
        admin_zones: () => navigate('/admin-zones'),
        admin_apartments: () => navigate('/admin-apartments'),
        admin_reservations: () => navigate('/admin-reservations'),
        admin_incidents: () => navigate('/admin-incidents'),
        
        login: () => navigate('/login'),
        logout: () => {
            logout();
            navigate('/home');
        },

        profile: () => navigate('/profile/' + user.id)
    }

    const { user, isAuth, isAdmin, logout } = useContext(AuthContext);

    // console.log(user);
    return (
        <div className={HeaderCSS.top}>
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a onClick={() => redirects.home()} className="w3-bar-item w3-button"><b>Aloja</b>BienTo</a>
                {isAdmin && <>
                    <a  onClick={() => redirects.admin_cities()} className="w3-bar-item w3-button">Adm-Cities</a>
                    <a  onClick={() => redirects.admin_zones()} className="w3-bar-item w3-button">Adm-Zones</a>
                    <a onClick={() => redirects.admin_apartments()} className="w3-bar-item w3-button">Adm-Apartments</a>
                    <a onClick={() => redirects.admin_reservations()} className="w3-bar-item w3-button">Adm-Reservations</a>
                    <a onClick={() => redirects.admin_incidents()} className="w3-bar-item w3-button">Adm-Incidents</a>

                </>}
                {!isAdmin && 
                <>
                    <a  onClick={() => redirects.home()} className="w3-bar-item w3-button">Home</a>
                    <a  onClick={() => redirects.cities()} className="w3-bar-item w3-button">Cities</a>
                    <a onClick={() => redirects.zones()} className="w3-bar-item w3-button">Zones</a>
                    <a onClick={() => redirects.apartments()} className="w3-bar-item w3-button">Apartments</a>
                </>
                }
                    <div className="w3-right w3-hide-small">
                {(isAuth || isAdmin) && <>  
                    <a className="w3-bar-item w3-button"> <NotificationBell/></a>
                    <a onClick={() => redirects.profile()} className="w3-bar-item w3-button"> <FontAwesomeIcon icon={faUser} /> {user.username} </a>
                    <a onClick={() => redirects.logout()} className="w3-bar-item w3-button">Logout <FontAwesomeIcon icon={faArrowRightToBracket} /></a>

                    {/* {isAuth && <a onClick={() => logout()} className="w3-bar-item w3-button">Logout</a>} */}
                    </>} 
                </div>
                {!isAuth && 
                    <div className="w3-right w3-hide-small">
                        <a onClick={() => redirects.login()} className="w3-bar-item w3-button">Login</a>
                    </div>
                }
        </div>
    </div>
    )
}