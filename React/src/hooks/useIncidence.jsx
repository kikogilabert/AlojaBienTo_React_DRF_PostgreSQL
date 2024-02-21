import { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IncidenceService from "../services/IncidenceService";

export function useIncidence() {

        const [incidents, setIncidents] = useState([]);
    
        // useEffect(() => {
        //     IncidenceService.getIncidents()
        //         .then(({ data, status }) => {
        //             if (status === 200) {
        //                 setIncidents(data);
        //             }
        //         })
        //         .catch(e => console.error(e));
        // }, []);
    

    //CREATE AN INCIDENCE
    const useCreateIncidence = (info) => {
        // console.log(info);
        IncidenceService.CreateIncidence(info)
            .then(({ data, status }) => {
                if (status === 200) {
                    // console.log(data);
                }
            })
            .catch(e => console.error(e));
    };

    return { useCreateIncidence, incidents, setIncidents };
}