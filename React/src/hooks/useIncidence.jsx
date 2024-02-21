import { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IncidenceService from "../services/IncidenceService";

export function useIncidence() {

        const [incidents, setIncidents] = useState([]);
    
        useEffect(() => {
            IncidenceService.getIncidents()
                .then(({ data, status }) => {
                    if (status === 200) {
                        // console.log(data);
                        setIncidents(data);
                    }
                })
                .catch(e => console.error(e));
        }, []);
    

    //CREATE AN INCIDENCE
    const useCreateIncidence = (info) => {
        IncidenceService.CreateIncidence(info)
            .then(({ data, status }) => {
                if (status === 200) {
                    // console.log(data);
                }
            })
            .catch(e => console.error(e));
    };

    const useDeleteIncidents = (info) => {
        IncidenceService.DeleteIncidence(info)
            .then(({ data, status }) => {
                if (status === 200) {
                    setIncidents(incidents.filter(incident => incident.id !== info));
                }
            })
            .catch(e => console.error(e));
    };

    const useUpdateIncidence = (state, id) => {
        IncidenceService.UpdateIncidence(state, id)
            .then(({ data, status }) => {
                if (status === 200) {
                // console.log(data);
                setIncidents(incidents.map(incident => {
                    if (incident.id === id) {
                        incident.status = state.status;
                    }
                    return incident;
                }));
            }})
            .catch(e => console.error(e));
    };

    return { useCreateIncidence, useDeleteIncidents, incidents, useUpdateIncidence, setIncidents };
}