import React from 'react';
import FooterCSS from  './Footer.module.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    
    return (
        // <h1>hola</h1>
        <div className={FooterCSS.footer}>
        <div className={FooterCSS.contain}>
        <div className={FooterCSS.col}>
          <h1>Company</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className={FooterCSS.col}>
          <h1>Products</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
            <li>Get in touch</li>
          </ul>
        </div>
        <div className={FooterCSS.col}>
          <h1>Accounts</h1>
          <ul>
            <li>About</li>
            <li>Mission</li>
            <li>Services</li>
            <li>Social</li>
          </ul>
        </div>
        <div className={FooterCSS.col}>
          <h1>Resources</h1>
          <ul>
            <li>Webmail</li>
            <li>Redeem code</li>
            <li>WHOIS lookup</li>
            <li>Site map</li>
          </ul>
        </div>
        <div className={FooterCSS.col}>
          <h1>Support</h1>
          <ul>
            <li>Contact us</li>
            <li>Web chat</li>
            <li>Open ticket</li>
          </ul>
        </div>
        <div className={`${FooterCSS.col} ${FooterCSS.social}`}>
          <h1>Social</h1>
          <ul>
            <li><h6>Kiko Gilabert</h6><a href="https://github.com/kikogilabert"><img src="../../../../assets/logo/github-color-svgrepo-com.svg" width="32"/></a></li>
            <li><h6>Alberto Gómez</h6><a href="https://github.com/albertogomezz"><img src="../../../../assets/logo/github-color-svgrepo-com.svg" width="32"/></a></li>
          </ul>
        </div>
      <div className={FooterCSS.clearfix}></div>
      </div>
      </div>
        )
}