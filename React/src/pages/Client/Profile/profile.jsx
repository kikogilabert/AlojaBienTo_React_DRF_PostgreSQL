import React, { useEffect } from 'react'
import { useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import AuthService from '../../../services/AuthService';
import AuthContext from '../../../context/AuthContext';
import { useAuth } from '../../../hooks/useAuth';
import ProfileCSS from './profile.module.css';
// import { useProfile } from '../../../hooks/useAuth';


export default function Profile() {
    const id = useParams();
    // console.log(id);
    // const { isCorrect, profile, useUpdateProfile } = useAuth(id);
    // const [profile, setProfile]
    const {user} = useContext(AuthContext);
    const { useProfile, profile } = useAuth();


    useEffect(function () {
        useProfile(id);
      }, [])
    console.log(profile);
    
  
    const navigate = useNavigate();
    return (
        <div>
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
                <br />
                <div className={ProfileCSS.profileemail}>{user.email}</div>
                <br />
              </div>
      
              <div className={ProfileCSS.profilestats}>
                <ul>
                  <li>
                    <span className={ProfileCSS.profilestatcount}></span> Reservations
                  </li>
                  <li>
                    <span className={ProfileCSS.profilestatcount}></span> Seen Notifications
                  </li>
                  <li>
                    <span className={ProfileCSS.profilestatcount}></span> Not seen Notifications
                  </li>
                </ul>
              </div>
            </div>
      
            <div className={ProfileCSS.reservationcards}>
              <h1>reservation card</h1>
              {/* <div className="alinear-texto" style={{ display: state.reservations.length === 0 ? 'block' : 'none' }}>
                No reservations to display.
              </div> */}
               {/* <div style={{ display: state.reservations.length > 0 ? 'block' : 'none' }}>
                {state.reservations.map((reservation) => (
                  <div key="" className={ProfileCSS.card}>
                    <div className={ProfileCSS.cardInfo}>
                      <h2>Pista : P</h2>
                      <p>Fecha : </p>
                      <div className={ProfileCSS.buttons}>
                        <button className={ProfileCSS.editButton}>Edit Reservation <FontAwesomeIcon icon="pen-to-square" /></button>
                        <button className={ProfileCSS.deleteButton}>Delete <FontAwesomeIcon icon="trash" /></button>
                      </div>
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>
        </header>
      </div>
      
    );
}