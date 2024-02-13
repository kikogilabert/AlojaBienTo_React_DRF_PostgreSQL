import {React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useApartments } from '../../../hooks/useApartments';
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";
import CardHomeApartments from '../../Home/card_home_apartments'

export default function ListApartments({ AllApartments }) {

  const navigate = useNavigate();
  const { slug } = useParams();

  const { apartments } = useApartments();
  const { useOneZone, zoneApartments } = useZones();

  if ( slug ) {
    useEffect(function () {
      useOneZone(slug);
    }, [])
    AllApartments = zoneApartments
  }

  const handleCityClick = (slug_apartment) => {
    // console.log(slug_apartment);
    navigate('/apartment_details/' + slug_apartment)
  };

    return (
      <>
        <br></br><br></br>
        <br></br>
        <div className="w3-row-padding w3-margin-top">
          {AllApartments.map(apartment => (
              <CardHomeApartments key={apartment.id} apartment={apartment} onClick={handleCityClick}/>
            ))}
        </div>
      </>
    );
};