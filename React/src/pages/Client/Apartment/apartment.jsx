import React from 'react'
import ListApartments from '../../../components/Client/Apartments/ListApartments'
// import { useNavigate } from "react-router-dom";
import { useContext, useCallback, useEffect, useState } from "react";
import ApartmentService from "../../../services/ApartmentService";
import ApartmentContext from "../../../context//ApartmentContext";

export default function apartment() {
    const { apartments, setApartments } = useContext(ApartmentContext);

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

    return (
    <article>
            <ListApartments AllApartments={apartments}/>
    </article>
    )
}