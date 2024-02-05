import React from 'react';
import HeaderCSS from  './Header.module.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const redirects = {
        home: () => navigate('/home'),
        cities: () => navigate('/cities'),
        zones: () => navigate('/zones'),

        admin_cities: () => navigate('/admin-cities'),
        admin_zones: () => navigate('/admin-zones'),
        admin_apartments: () => navigate('/admin-apartments'),
    }
    
    return (
        <div className={HeaderCSS.top}>
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a onClick={() => redirects.home()} className="w3-bar-item w3-button"><b>Aloja</b>BienTo</a>
                <div className="w3-right w3-hide-small">
                    <a  onClick={() => redirects.home()} className="w3-bar-item w3-button">Home</a>
                    <a  onClick={() => redirects.cities()} className="w3-bar-item w3-button">Cities</a>
                    <a onClick={() => redirects.zones()} className="w3-bar-item w3-button">Zones</a>

                    <a  onClick={() => redirects.admin_cities()} className="w3-bar-item w3-button">Admin Cities</a>
                    <a  onClick={() => redirects.admin_zones()} className="w3-bar-item w3-button">Admin Zones</a>
                    <a onClick={() => redirects.admin_apartments()} className="w3-bar-item w3-button">Admin Apartments</a>
                </div>
            </div>
        </div>
    )
}