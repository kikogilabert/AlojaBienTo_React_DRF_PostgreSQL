import React from 'react';
import HeaderCSS from  './Header.module.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const redirects = {
        home: () => navigate('/home'),
        cities: () => navigate('/cities'),
        create_city: () => navigate('/cities-create'),
    }
    
    return (
        <main>
            <nav className= {HeaderCSS.header}>
                <ul className={HeaderCSS.ulmenu} >
                    <li className={HeaderCSS.menu}  onClick={() => redirects.home()}>Home</li>
                    <li className={HeaderCSS.menu} onClick={() => redirects.cities()}>Cities</li>
                </ul>
            </nav>
        </main>
    )
}