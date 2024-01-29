import {React, useState } from 'react';
import { useZones } from '../../../hooks/useZones';
import { useNavigate } from "react-router-dom";


export function ListZones() {
  const {zones, useDeleteZone, useOneZones} = useZones();
  const navigate = useNavigate();

  
  function deleteZone(slug) {
    // console.log(slug);
    useDeleteZone(slug);

  }

  function updateZone(slug) {
    console.log(slug);
    navigate(`/zones-update/${slug}`);
  }


    return (
        <div>
                <h1>List of Zones</h1>
        <div style={{ marginLeft: '20px',  display: 'flex', justifyContent: 'center' }}>
            <table className="table" style={{ border: '1px black solid' }}>
            <thead>
                <tr >
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Image</th>
                <th scope="col">City</th>
                </tr>
            </thead>
            <tbody>
            {zones.map((zone, index) => (
            <tr  key={index}>
            <td>{zone.name}</td>
            <td>{zone.zone_type}</td>
            <td>{zone.zone_image}</td>
            <td>{zone.city}</td>
            
            <td><button className="btn btn-danger" onClick={() => deleteZone(zone.slug)}>DELETE</button> |
                <button className="btn btn-danger" onClick={() => updateZone(zone.slug)}>UPDATE</button></td>
            </tr>
        ))}
            </tbody>
            </table>
        </div>
        </div>
    
    );
};


export default ListZones;
