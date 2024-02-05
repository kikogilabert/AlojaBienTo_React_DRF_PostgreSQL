import api from './api';

const CitiesService = {

    getAllApartments() {
        return api().get('/apartments');
    },

    getOneApartment(slug) {
        return api().get(`apartments/${slug}`);
    },

    createApartment(data) {
        return api().post('apartments/', data);
    },

    updateApartment(slug, data) {
        return api().put(`apartments/${slug}`, data);
    },

    deleteApartment(slug) {
        return api().delete(`apartments/${slug}`);
    },
};
export default CitiesService;