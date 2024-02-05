import { useContext, useCallback, useEffect, useState } from "react";
import CitiesService from "../services/CitiesService";
import CitiesContext from "../context/CitiesContext";
import { useNavigate } from "react-router-dom";
import ZoneServices from "../services/ZonesService";

export function useCities() {

    const { cities, setCities } = useContext(CitiesContext);

    const [ citiesZones, setCityZones] = useState([]);
    const [ oneCity, setOneCity ] = useState({});
    const [ useOneCityCompleted, setUseOneCityCompleted ] = useState(false);
    
    const navigate = useNavigate();

    const useOneCity = useCallback((slug) => {

        CitiesService.getOneCity(slug)
            .then(({ data }) => {
            setOneCity(data);
            setUseOneCityCompleted(true);
            })
            .catch((e) => console.error(e));
    }, []);

    //EL USE EFFECT SOLO SE EJECUTARA CUANDO SE REALIZE EL useOneCity
    
    useEffect(() => {
    if (oneCity && useOneCityCompleted) {
        ZoneServices.getZonesByCity(oneCity.slug)
        .then(({ data, status }) => {
            if (status === 200) {
            setCityZones(data);
            }
        })
        .catch((e) => console.error(e));
    }
    }, [oneCity, useOneCityCompleted]);

    //-------------------------ADD ONE CITY---------------------------------------------------
    const addCity = useCallback(data => {
        let city_data = {
            name: data.name,
            state: data.state,
            country: data.country,
            image: data.image
        }

        CitiesService.createCity(city_data).then((data) => {            
                    console.log(data.data);
                    setCities([...cities, data.data]);
                    // navigate("/cities");
            })
            .catch(e => {
                console.error(e);
                    });

                }
            , [cities]);

    //-------------------------DELETE ONE CITY---------------------------------------------------
    const useDeleteCity = (slug) => {
        
        CitiesService.deleteCity(slug)
        .then(({ data, status }) => {
            console.log(data);  
            // if (status === 200) {
                // toast.success(data.data);
                setCities(cities.filter(cities => cities.slug !== slug));
            // }
        })
        .catch(e => console.error(e));
    }

    //-------------------------UPDATE ONE CITY-------------------------------------------------
    const useUpdateCity = useCallback((slug, data) => {

        let city_data = {
            name: data.name,
            state: data.state,
            country: data.country,
            image: data.image
        }

        // console.log(city_data);
        CitiesService.updateCity(slug, city_data)
            .then(({ data, status }) => {
                    console.log(status);
                    console.log(data);
                if (status === 200) {
                    let old_cities = [...cities];
                    const index = old_cities.findIndex(city => city.slug === slug);
                    if (index !== -1) {
                        old_cities[index] = data;
                        setCities(old_cities);
                    }
                    navigate("/cities");
                }
            })
            .catch(e => {
                console.error(e);
                // toast.error('Create station error');
            });
        // setIsCorrect(true);
        // setTimeout(() => { setIsCorrect(false); }, 1000);
    }, []);

    return { cities, setCities, addCity, useDeleteCity, useUpdateCity, useOneCity, oneCity, setCityZones,citiesZones  };
}