import React from 'react';
import HeaderCSS from  './Header.module.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const redirects = {
        home: () => navigate('/home'),
        cities: () => navigate('/cities'),
        zones: () => navigate('/zones'),
    }
    
    return (
        <div className={HeaderCSS.top}>
            <div className="w3-bar w3-white w3-wide w3-padding w3-card">
            <a onClick={() => redirects.home()} className="w3-bar-item w3-button"><b>Aloja</b>BienTo</a>
                <div className="w3-right w3-hide-small">
                    <a  onClick={() => redirects.home()} className="w3-bar-item w3-button">Home</a>
                    <a  onClick={() => redirects.cities()} className="w3-bar-item w3-button">Cities</a>
                    <a onClick={() => redirects.zones()} className="w3-bar-item w3-button">Zones</a>
                </div>
            </div>
        </div>
    )
}