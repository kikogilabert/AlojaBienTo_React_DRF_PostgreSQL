import React, { useState, useEffect } from 'react';
import CityForm from '../../../components/city_form';
import { useParams } from "react-router-dom";
import { useCities } from '../../../hooks/useCities';


const UpdateCity = () => {
    const [city, setCity] = useState('');
    const { id } = useParams();
    const {cities, useUpdateCity} = useCities();

    // const [oneCity, setOneCity] = useState({});

    const {oneCity, useOneCity } = useCities();


    useEffect(() => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useOneCity(id);
    }, [id, useOneCity]);
   
    const emit_data = (cityData) => {
        // console.log(cityData);
        useUpdateCity(id, cityData);
    }


    return (
        <CityForm onAddCity={emit_data} onUpdateCity={emit_data} updatedCity={oneCity}/>
    );
};

export default UpdateCity;
