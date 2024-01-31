import React from 'react'
import ListCities from '../../../components/Admin/Cities/ListCities'
import { useNavigate } from "react-router-dom";
import { useContext, useCallback, useEffect, useState } from "react";
import { useCities } from '../../../hooks/useCities';
import CitiesService from "../../../services/CitiesService";
import CitiesContext from "../../../context/CitiesContext";
import CitiesModal from '../../../components/Admin/Cities/CitiesModal';
import Button from 'react-bootstrap/Button';

export default function city() {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const {cities, setCities, addCity} = useCities();
    const navigate = useNavigate();
    const redirects = { 
        create: () => navigate('/cities-create'),
    }

    useEffect(() => {
        CitiesService.getAllCities()
            .then(response => {
                setCities(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

     //ADD CITY
    const emit_data = (cityData) => {
        console.log(cityData);
        addCity(cityData);
    }

    return (
    <div>
            <h1>CITY</h1>
            {/* <button onClick={() => redirects.create()}>Create a city</button> */}
        <Button variant="success" onClick={handleShow}>
            Create
        </Button>
            <ListCities/>
            <CitiesModal show={show}  handleClose={handleClose} onAddCity={emit_data}/> 
            {/* updatedZone={updatedZone} onAddZone={emit_data} */}
    </div> 
    )
}