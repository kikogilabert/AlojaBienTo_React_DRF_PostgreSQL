import React from 'react'
import ListZones from '../../../components/Admin/Zones/ListZones'
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useCallback, useEffect, useState } from "react";
import ZoneModuleCSS from './Zone.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useZones } from '../../../hooks/useZones';
import ZonesModal from '../../../components/Admin/Zones/ZonesModal';

export default function zones() {

    const [show, setShow] = useState(false);
    const [updatedZone, setUpdatedZone] = useState(null);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {zones, addZone, setZones, useOneZone } = useZones();

    //ADD ZONE
    const emit_data = (zoneData) => {
        console.log(zoneData);
        addZone(zoneData);
    }

    return (
    <div className={ZoneModuleCSS.main}>
        <h1>ZONES</h1>
        <Button variant="success" onClick={handleShow}>
            Create
        </Button>
        <ZonesModal onAddZone={emit_data} show={show} updatedZone={updatedZone} handleClose={handleClose}/>
        <ListZones/>
    </div>
    )
}