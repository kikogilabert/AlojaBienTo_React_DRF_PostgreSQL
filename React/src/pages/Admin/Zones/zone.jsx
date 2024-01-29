import React from 'react'
import ListZones from '../../../components/Client/Zones/ListZones'
import { useNavigate } from "react-router-dom";
import { useContext, useCallback, useEffect, useState } from "react";
import ZoneModuleCSS from './Zone.module.css';
import ZonesService from "../../../services/ZonesService";
import ZonesContext from "../../../context/ZonesContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CreateModal from '../../../components/create_modal';
import { useZones } from '../../../hooks/useZones';

export default function zones() {

    const [show, setShow] = useState(false);
    const [updatedZone, setUpdatedZone] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {zones, addZone } = useZones();


    const navigate = useNavigate();
    const redirects = { 
        create: () => navigate('/zone-create'),
    }

    const emit_data = (zoneData) => {
        console.log(zoneData);
        // addZone(zoneData);
    }

    return (
    <div className={ZoneModuleCSS.main}>
    
    <h1>ZONES</h1>
   
        <Button variant="primary" onClick={handleShow}>
            Create
        </Button>
        <CreateModal onAddZone={emit_data} show={show} updatedZone={updatedZone} handleClose={handleClose}/>
        <ListZones/>
    </div>
    )
}