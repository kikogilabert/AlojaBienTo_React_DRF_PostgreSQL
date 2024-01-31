import React from 'react'
import ListCities from '../../../components/Client/Cities/ListCities'
// import { useNavigate } from "react-router-dom";
import { useContext, useCallback, useEffect, useState } from "react";
import CitiesService from "../../../services/CitiesService";
import CitiesContext from "../../../context/CitiesContext";

export default function city() {
    const { cities, setCities } = useContext(CitiesContext);

    useEffect(() => {
        CitiesService.getAllCities()
            .then(response => {
                setCities(response.data);
                // console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    return (
    <article>
            <h1>CITY</h1>
            <ListCities AllCities={cities}/>
    </article>
    )
}