import { useContext, useCallback, useEffect, useState } from "react";
import ZonesService from "../services/ZonesService";
import ApartmentService from "../services/ApartmentService";
import ZonesContext from "../context/ZonesContext";
import { useNavigate } from "react-router-dom";

export function useZones() {

    const { zones, setZones } = useContext(ZonesContext);

    const [oneZone, setOneZone] = useState({});

    const [oneZoneByApartment, setOneZoneByApartment] = useState({});

    const [ zoneApartments, setZoneApartments] = useState([]);
    
    const [ useOneZoneCompleted, setUseOneZoneCompleted ] = useState(false);

    const navigate = useNavigate();

    const useOneZoneByApartment = useCallback((zone_id) => {
        ZonesService.getOneZoneById(zone_id)
            .then(({ data }) => {
                setOneZoneByApartment(data);
            })
            .catch((e) => console.error(e));
    }, []);

    const useOneZone = useCallback((slug) => {

        ZonesService.getOneZone(slug)
            .then(({ data }) => {
                // console.log(data);
                setOneZone(data);
                setUseOneZoneCompleted(true);
            })
            .catch((e) => console.error(e));
    }, []);

    //EL USE EFFECT SOLO SE EJECUTARA CUANDO SE REALIZE EL useOneCity

    useEffect(() => {
    if (oneZone && useOneZoneCompleted) {
        // console.log(oneZone.slug);
        ApartmentService.getApartmentsByZone(oneZone.slug)
        .then(({ data, status }) => {
            if (status === 200) {
                // console.log(data);
                setZoneApartments(data);
            }
        })
        .catch((e) => console.error(e));
    }
    }, [oneZone, useOneZoneCompleted]);


//CREATE ONE ZONE
const addZone = useCallback(data => {
    let zone_data = {
        name: data.zone_name,
        zone_type: data.zone_type,
        city: data.city_id,
        zone_image: data.image
    }
    // console.log(data);
    console.log(zone_data);

    ZonesService.createZone(zone_data).then((data) => {            
                console.log(data.data);
                setZones([...zones, data.data]);
                console.log(zones);
    })
    .catch(e => {
        console.error(e);
            });
}, [zones]);

//DELETE ONE ZONE
const useDeleteZone = (slug) => {
    // console.log(slug);
    ZonesService.deleteZone(slug)
    .then(({ data, status }) => {
        console.log(data);  
        // if (status === 200) {
            // toast.success(data.data);
            setZones(zones.filter(zones => zones.slug !== slug));
        // }
    })
    .catch(e => console.error(e));
}

//UPDATE ONE ZONE
const useUpdateZone = useCallback((slug, data) => {

    let zone_data = {
        name: data.zone_name,
        zone_type: data.zone_type,
        city: data.city_id,
        zone_image: data.image
    }

    console.log(slug);
    ZonesService.updateZone(slug, zone_data)
        .then(({ data, status }) => {
                // console.log(status);
                console.log(data);
            if (status === 200) {
                let old_zones = [...zones];
                const index = old_zones.findIndex(zone => zone.slug === slug);
                if (index !== -1) {
                    old_zones[index] = data;
                    setZones(old_zones);
                }
                navigate("/admin-zones");
            }
        })
        .catch(e => {
            console.error(e);
        });
}, []);


return { zones, setZones, addZone, useDeleteZone, useUpdateZone, useOneZone, oneZone, setZoneApartments, zoneApartments, useOneZoneByApartment, oneZoneByApartment, setOneZoneByApartment };
}