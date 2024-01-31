import React from 'react'
import ListZones from '../../../components/Client/Zones/ListZones'
// import { useNavigate } from "react-router-dom";
import { useContext, useCallback, useEffect, useState } from "react";
import ZonesService from "../../../services/ZonesService";
import ZonesContext from "../../../context/ZonesContext";

export default function city() {
    const { zones, setZones } = useContext(ZonesContext);

    useEffect(() => {
        ZonesService.getAllZones()
            .then(response => {
                setZones(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    return (
    <article>
        <br></br><br></br><br></br>
            <h1>ZONES</h1>
            <ListZones AllZones={zones} />
            {/* <ListCities AllCities={cities}/> */}
    </article>
    )
}