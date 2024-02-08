import {React, useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useApartments } from '../../../hooks/useApartments';
import { useNavigate } from "react-router-dom";
import CardApartments from './CardApartments'
import CardApartmentsCSS from './CardApartments.module.css';

export default function ListApartments({ AllApartments }) {
  const { slug } = useParams();
  const { apartments } = useApartments();
  const { useOneApartment, zoneApartments } = useApartments();

  if ( slug ) {
    useEffect(function () {
      useOneApartment(slug);
    }, [])
    AllApartments = zoneApartments
  }

  console.log(AllApartments);
    return (
      <>
      <br></br><br></br>
      <div className={CardApartmentsCSS.align_cards}>
        {AllApartments.map(apartment => (
            <CardApartments key={apartment.id} apartment={apartment}/>
          ))}
      </div>
      </>
    );
};