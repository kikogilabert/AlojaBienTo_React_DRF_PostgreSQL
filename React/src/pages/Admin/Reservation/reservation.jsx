import React from 'react'
import ListReservations from '../../../components/Admin/Reservations/ListReservations'
// import { useNavigate, useParams } from "react-router-dom";
// import { useContext, useCallback, useEffect, useState } from "react";
// import ZoneModuleCSS from '../Zones/Zone.module.css';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Modal from 'react-bootstrap/Modal';
// import { useZones } from '../../../hooks/useZones';
// import ZonesModal from '../../../components/Admin/Zones/ZonesModal';

export default function reservations() {


    // const {zones, addZone, setZones, useOneZone } = useZones();


    return (
        <>
        <br /> <br /> <br /> <br /> <br />
        {/* <h1>RESERVATIONS</h1> */}
        <ListReservations/>
        </>
    )
}