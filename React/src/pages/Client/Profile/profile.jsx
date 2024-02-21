import React, { useEffect, useState } from 'react';
import { useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import AuthService from '../../../services/AuthService';
import AuthContext from '../../../context/AuthContext';
import { useAuth } from '../../../hooks/useAuth';
import { useReservation } from '../../../hooks/useReservation';
import { useApartments } from '../../../hooks/useApartments'
import ProfileCSS from './profile.module.css';

export default function Profile() {
    const id = useParams();
    const [type_list, setTypeList] = useState(0);
    const { useReservationByUser, reservations, useDeleteReservation } = useReservation();
    const { user } = useContext(AuthContext);
    const { useProfile, profile } = useAuth();

    useEffect(function () {
        if(localStorage.getItem('type_list') !== null) {
            setTypeList(2);
        }    
    }, []);
    

    useEffect(function () {
        useProfile(id);
        useReservationByUser();
    }, []);

    const handleclickdelete = (id) => {
        useDeleteReservation(id);
    }

    const handleItemClick = (type) => {
        switch (type) {
            case 'Reservation':
                setTypeList(0);
                break;
            case 'Seen Notification':
                setTypeList(1);
                break;
            case 'Not Seen Notification':
                setTypeList(2);
                break;
            default:
                setTypeList(0);
        }
    };

    return (
        
        <div>
          <br></br>
          <br></br>
          <br></br>
            <header>
                <div className={ProfileCSS.container}>
                    <div className={ProfileCSS.profile}>
                        <div className={ProfileCSS.profileimage}>
                            <img src={profile.image} alt="" />
                        </div>

                        <div className={ProfileCSS.profileusersettings}>
                            <h1 className={ProfileCSS.profileusername}>
                                Welcome back <span className={ProfileCSS.profileusername2}>{profile.name}</span>!
                            </h1>
                            <br/>
                            <div className={ProfileCSS.profileemail}>{user.email}</div>
                            <br/>
                        </div>

                        <div className={ProfileCSS.profilestats}>
                            <ul>
                                <li onClick={() => handleItemClick('Reservation')}>
                                    <span className={ProfileCSS.profilestatcount}></span> Reservation
                                </li>
                                <li onClick={() => handleItemClick('Seen Notification')}>
                                    <span className={ProfileCSS.profilestatcount}></span> Seen Notifications
                                </li>
                                <li onClick={() => handleItemClick('Not Seen Notification')}>
                                    <span className={ProfileCSS.profilestatcount}></span> Not seen Notifications
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={ProfileCSS.reservationcards}>
                        {type_list === 0 && reservations.map((reservation, index) => (
                            <div key={index} className={ProfileCSS.card}>
                                <div className={ProfileCSS.cardinfo}>
                                    <h2>Reservation of apartment {reservation.apartment_id}</h2>
                                    <p>Check-in date: {reservation.f_ini}</p>
                                    <p>Check-out date: {reservation.f_end}</p>                                
                                    <div className={ProfileCSS.buttons}>
                                        <button 
                                            className={ProfileCSS.deletebutton} 
                                            onClick={() => handleclickdelete(reservation.id)} // Llama a handleclickdelete con el ID de la reserva
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {type_list === 1 && (
                            <div className={ProfileCSS.card_info}>
                                <h2>Título para type_list igual a 1</h2>
                                <p>Descripción para type_list igual a 1</p>
                                <div className={ProfileCSS.buttons}>
                                    <button className={ProfileCSS.delete_button}>Delete</button>
                                </div>
                            </div>
                        )}
                        {type_list === 2 && (
                            <div className={ProfileCSS.card_info}>
                                <h2>Título para type_list igual a 2</h2>
                                <p>Descripción para type_list igual a 2</p>
                                <div className={ProfileCSS.buttons}>
                                    <button className={ProfileCSS.delete_button}>Delete</button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
}
