import React, { useState, useEffect } from 'react';

const CityForm = ({ onAddCity, updatedCity }) => {
    // console.log(initialCity);
    const [name, setCity] = useState(updatedCity ? updatedCity.name : '');
    const [state, setState] = useState(updatedCity ? updatedCity.state : '');
    const [country, setCountry] = useState(updatedCity ? updatedCity.country : '');
    const [image, setImage] = useState(updatedCity ? updatedCity.image : '');
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if(updatedCity) {
            setCity(updatedCity.name);
            setState(updatedCity.state );
            setCountry(updatedCity.country);
            setImage(updatedCity.image);
            setIsUpdate(true);
        }
        }, [updatedCity]);


        const handleNameChange = (e) => {
            setCity(e.target.value);
        };
    
        const handleStateChange = (e) => {
        setState(e.target.value);
        };
    
        const handleCountryChange = (e) => {
        setCountry(e.target.value);
        };

        const handleImageChange = (e) => {
            setImage(e.target.value);
            };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isUpdate === true){
            onAddCity({ name, state, country, image }, updatedCity.id);
            setIsUpdate(false);
        }else{
            onAddCity({ name, state, country, image });

        }
    };
    

    return (
        <form onSubmit={handleSubmit}>  
            <label>
                City:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <br />
            <label> State:
                <input type="text" value={state} onChange={handleStateChange} />
            </label>
            <br />
            <label>
                Country:
                <input type="text" value={country} onChange={handleCountryChange}/>
            </label>
            <br />
            <label>
                Image:
                <input type="text" value={image} onChange={handleImageChange}/>
            </label>
            <br />
            <button type="submit">Add City</button>
        </form>
    );
};

export default CityForm;
