import {React, useState } from 'react';
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";
import CardZones from './CardZones'

export default function ListZones({ AllZones }) {
  const {zones } = useZones();
  // console.log(AllZones);
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