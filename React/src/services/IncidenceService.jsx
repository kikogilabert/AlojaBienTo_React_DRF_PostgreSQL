import api from "./api"

const IncidenceService = {

    CreateIncidence(data) {
        return api().post(`apartment_incidence`, data);
    },
    
};

export default IncidenceService;