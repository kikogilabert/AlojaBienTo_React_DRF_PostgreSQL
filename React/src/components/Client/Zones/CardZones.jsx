import {React, useState } from 'react';
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";

export default function CardZones() {
  const {zones } = useZones();
//   console.log(AllZones);
    return (
        <h1>Card Zones</h1>
    );
};