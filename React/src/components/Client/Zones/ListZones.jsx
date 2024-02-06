import {React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";
import CardZones from './CardZones'
import { useCities } from '../../../hooks/useCities';
import CardZonesCSS from './CardZones.module.css';

export default function ListZones({ AllZones }) {
  const { slug } = useParams();
  const { zones } = useZones();
  const { useOneCity, oneCity, citiesZones } = useCities();

  if ( slug ) {
    useEffect(function () {
      useOneCity(slug);
    }, [])
    AllZones = citiesZones
  }

  // console.log(AllZones);

    return (
      <div className={CardZonesCSS.align_cards}>
        {AllZones.map(zone => (
        <CardZones key={zone.id} zone={zone}/>
      ))}
      </div>
    );
};