import {React, useState } from 'react';
import { useCities } from '../../../hooks/useCities';
import { useNavigate } from "react-router-dom";
import CardCitiesCSS from './CardCities.module.css';

export default function ListCities( { city }) {
  const {cities, useOneCity} = useCities();
  // console.log(city);
  return (
  <div className={CardCitiesCSS.box}>
      <div className={CardCitiesCSS.card}>
        <div className={CardCitiesCSS.imgBx}>
            <img src={ city.image } alt="images"/>
        </div>
        <div className={CardCitiesCSS.details}>
            <h2>{ city.name }<br></br><span> { city.state }</span></h2>
        </div>
      </div>
  </div>
  );
};