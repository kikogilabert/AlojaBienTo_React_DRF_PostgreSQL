import React from 'react'
import ListApartments from '../../../components/Admin/Apartments/ListApartments'
import { useContext, useCallback, useEffect, useState } from "react";
import { useApartments } from '../../../hooks/useApartments';
import ApartmentService from "../../../services/ApartmentService";
import Button from 'react-bootstrap/Button';
import ApartmentsModal from '../../../components/Admin/Apartments/ApartmentsModal';


export default function admin_apartment() {

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const {apartments, setApartments, addApartment} = useApartments();

    useEffect(() => {
        ApartmentService.getAllApartments()
            .then(response => {
                setApartments(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    const emit_data = (apartmentData) => {
        // console.log(apartmentData);
        addApartment(apartmentData);
    }

    return (
        <div>
            <br></br><br></br><br></br><br></br>
            <Button variant="success" onClick={handleShow}>
            Create
            </Button>
            <ListApartments />
            <ApartmentsModal show={show}  handleClose={handleClose} onAddApartment={emit_data}/> 
        </div>
    )
}