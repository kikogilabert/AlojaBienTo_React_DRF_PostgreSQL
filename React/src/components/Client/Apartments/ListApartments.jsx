import {React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useApartments } from '../../../hooks/useApartments';
import { useNavigate } from "react-router-dom";
import CardZones from './CardZones'
import { useZones } from '../../../hooks/useZones';

export default function ListApartments({ AllApartments }) {
  const { slug } = useParams();
  const { zones } = useZones();
  const { useOneCity, oneCity, citiesZones } = useApartments();

  if ( slug ) {
    useEffect(function () {
      useOneZone(slug);
    }, [])
    AllApartments = citiesZones
  }

    return (
      // <CardZones/>
      // <div className={CardCitiesCSS.align_cards}>
        // {AllZones.map(zone => (
          // <CardZones key={zone.id} zone={zone}/>
        // ))}
      // </div>
      <CardZones/>
    );
};