import { useContext, useCallback, useEffect, useState } from "react";
import ZonesService from "../services/ZonesService";
import ZonesContext from "../context/ZonesContext";
import { useNavigate } from "react-router-dom";

export function useZones() {
const { zones, setZones } = useContext(ZonesContext);

const [oneZone, setOneZone] = useState({});

const navigate = useNavigate();


//GET ONE ZONE
const useOneZone = useCallback((id) => {
    // console.log(id);
    ZonesService.getOneZone(id)
        .then(({data}) => {
            console.log(data);
            setOneZone(data);
        })
        .catch(e => console.error(e));
}, []);


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
            }
        , [zones]);
// });

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


return { zones, setZones, addZone, useDeleteZone, useUpdateZone, useOneZone, oneZone };
}