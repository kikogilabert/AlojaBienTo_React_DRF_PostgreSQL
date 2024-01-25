import React from 'react'
import ListCities from '../components/Client/Cities/ListCities'
import HomeCSS from  './Home.module.css';


export function Home() {
    return (
            <div>
              {/* <!-- Navbar (sit on top) --> */}
              <div className="w3-top">
                <div className="w3-bar w3-white w3-wide w3-padding w3-card">
                  <a href="#home" className="w3-bar-item w3-button"><b>BR</b> Architects</a>
                  {/* <!-- Float links to the right. Hide them on small screens --> */}
                  <div className="w3-right w3-hide-small">
                    <a href="#projects" className="w3-bar-item w3-button">Projects</a>
                    <a href="#about" className="w3-bar-item w3-button">About</a>
                    <a href="#contact" className="w3-bar-item w3-button">Contact</a>
                  </div>
                </div>
              </div>
        
              {/* <!-- Header --> */}
              <header className="w3-display-container w3-content w3-wide" style={{ maxWidth: '1500px' }} id="home">
                <img className="w3-image" src="/w3images/architect.jpg" alt="Architecture" width="1500" height="800" />
                <div className="w3-display-middle w3-margin-top w3-center">
                  <h1 className="w3-xxlarge w3-text-white">
                    <span className="w3-padding w3-black w3-opacity-min"><b>BR</b></span> <span className="w3-hide-small w3-text-light-grey">Architects</span>
                  </h1>
                </div>
              </header>
        
              {/* <!-- Page content --> */}
              <div className="w3-content w3-padding" style={{ maxWidth: '1564px' }}>
        
                {/* <!-- Project Section --> */}

                <div className="w3-row-padding">
                <div className="w3-container w3-padding-32" id="projects">
                    <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                        <img src="/w3images/house5.jpg" alt="House" width="100%" />
                        {/* <img className="w3-image" src="/w3images/architect.jpg" alt="Architecture" width="1500" height="800" /> */}

                    </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                        <img src="/w3images/house2.jpg" alt="House" width="100%"/>
                    </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                        <img src="/w3images/house3.jpg" alt="House"  width="100%"/>
                    </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                        <img src="/w3images/house4.jpg" alt="House"  width="100%"/>
                    </div>
                    </div>
                </div>

                <div className="w3-row-padding">
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Summer House</div>
                        <img src="/w3images/house2.jpg" alt="House"  width="100%"/>
                    </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Brick House</div>
                        <img src="/w3images/house5.jpg" alt="House"  width="100%"/>
                    </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Renovated</div>
                        <img src="/w3images/house4.jpg" alt="House"  width="100%"/>
                    </div>
                    </div>
                    <div className="w3-col l3 m6 w3-margin-bottom">
                    <div className="w3-display-container">
                        <div className="w3-display-topleft w3-black w3-padding">Barn House</div>
                        <img src="/w3images/house3.jpg" alt="House"  width="100%"/>
                    </div>
                    </div>
                </div>
                </div>
        
                {/* <!-- About Section --> */}
                <div className="w3-container w3-padding-32" id="about">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                </div>
                    <div className="w3-row-padding w3-grayscale">
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <img src="/w3images/team2.jpg" alt="John" width="100%"/>
                            <h3>John Doe</h3>
                            <p className="w3-opacity">CEO & Founder</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                        </div>
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <img src="/w3images/team1.jpg" alt="Jane" width="100%"/>
                            <h3>Jane Doe</h3>
                            <p className="w3-opacity">Architect</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                        </div>
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <img src="/w3images/team3.jpg" alt="Mike" width="100%"/>
                            <h3>Mike Ross</h3>
                            <p className="w3-opacity">Architect</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                        </div>
                        <div className="w3-col l3 m6 w3-margin-bottom">
                            <img src="/w3images/team4.jpg" alt="Dan" width="100%"/>
                            <h3>Dan Star</h3>
                            <p className="w3-opacity">Architect</p>
                            <p>Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                            <p><button className="w3-button w3-light-grey w3-block">Contact</button></p>
                        </div>
                    </div>
                </div>
        
                {/* <!-- Contact Section --> */}
                 <div className="w3-container w3-padding-32" id="contact">
                  {/* ... (Contact form) ... */}
                </div>
        
                {/* <!-- Image of location/map --> */}
                <div className="w3-container">
                  <img src="/w3images/map.jpg" className="w3-image" width="100%"/>
                </div>
        
              {/* <!-- Footer --> */}
              <footer className="w3-center w3-black w3-padding-16">
                <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" className="w3-hover-text-green">w3.css</a></p>
              </footer>
            </div>
          );
}
export default Home;