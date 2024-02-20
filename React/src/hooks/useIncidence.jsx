import { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IncidenceService from "../services/IncidenceService";
// import { toast } from 'react-toastify';
import { Toaster, toast } from "sonner";

export function useIncidence() {

    //CREATE AN INCIDENCE
    const useCreateIncidence = (info) => {
        // console.log(info);
        IncidenceService.CreateIncidence(info)
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    // console.log(status);
                    <Toaster position="top-right" richColors/>;
                    toast.success('Event has been Incident received, we will solve it as soon as possible.');
                }
            })
            .catch(e => console.error(e));
    };

    return { useCreateIncidence }
}