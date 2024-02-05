import {React, useState } from 'react';
import CardZonesCSS from './CardZones.module.css';
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CardZones({zone}) {
  const {zones } = useZones();
    return (
      <div>
        <div className={CardZonesCSS.wrapper}>
          <div className={CardZonesCSS.container}>
            <img src={zone.zone_image} alt="" />
            <div className={CardZonesCSS.top}></div>
            <div className={CardZonesCSS.bottom}>
              <div className={CardZonesCSS.left}>
                <div className={CardZonesCSS.details}> 
                  <h1>{zone.name}</h1>
                  <p>{zone.zone_type}</p>
                </div>        
                <button className={CardZonesCSS.buy}>View More <br /> <FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};