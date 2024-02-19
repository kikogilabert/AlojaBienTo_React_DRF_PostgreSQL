import { useContext, useCallback, useEffect, useState } from "react";
import ApartmentService from "../services/ApartmentService";
import ApartmentContext from "../context/ApartmentContext";
import { useNavigate } from "react-router-dom";

export function useApartments() {

const { apartments, setApartments } = useContext(ApartmentContext);
const [oneApartment, setOneApartment] = useState({});
const navigate = useNavigate();

const useOneApartment = useCallback((slug) => {
    ApartmentService.getOneApartment(slug)
        .then(({data}) => {
            setOneApartment(data);
        })
        .catch(e => console.error(e));
}, []);

const addApartment = useCallback(data => {

    const apartmentImagesArray = Array.isArray(data.apartment_images) ? data.apartment_images : [];

    const newImagesArray = data.apartment_images.split(',').map(image => image.trim());

    let apartment_data = {
        location: data.location,
        price: data.price,
        rooms: data.rooms,
        bathrooms: data.bathrooms,
        size: data.size,
        apartment_images: apartmentImagesArray.concat(newImagesArray),
        zone: data.zone
    }

    console.log(apartment_data);

    ApartmentService.createApartment(apartment_data).then((data) => {            
            setApartments([...apartments, data.data]);
        })
        .catch(e => {
            console.error(e);
                });
    }, [apartments]);

const useDeleteApartment = (slug) => {

    ApartmentService.deleteApartment(slug)
    .then(({ data, status }) => {
        // console.log(data);  
        setApartments(apartments.filter(apartments => apartments.slug !== slug));
    })
    .catch(e => console.error(e));
}

const useUpdateApartment = useCallback((slug, data) => {

    let apartment_data = {
        location: data.location,
        price: data.price,
        rooms: data.rooms,
        bathrooms: data.bathrooms,
        size: data.size,
        apartment_images: data.apartment_images,
        zone: data.zone
    }

    // console.log(city_data);
    ApartmentService.updateApartment(slug, apartment_data)
        .then(({ data, status }) => {
                // console.log(status);
                // console.log(data);
            if (status === 200) {
                let old_apartments = [...apartments];
                const index = old_apartments.findIndex(apartment => apartment.slug === slug);
                if (index !== -1) {
                    old_apartments[index] = data;
                    setApartments(old_apartments);
                }
                navigate("/admin-apartments");
            }
        })
        .catch(e => {
            console.error(e);
        });
}, []);

return { apartments, setApartments, addApartment, useDeleteApartment, useUpdateApartment, useOneApartment, oneApartment };
}