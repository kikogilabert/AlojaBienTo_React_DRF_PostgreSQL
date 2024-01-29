import api from './api';

const ZonesService = {

    getAllZones() {
        return api().get('/zones');
    },

    getOneZone(slug) {
        return api().get(`zones/${slug}`);
    },

    createZone(data) {
        return api().post('/zones/', data);
    },

    updateZone(slug, data) {
        return api().put(`zones/${slug}`, data);
    },

    
    deleteZone(slug) {
        return api().delete(`zones/${slug}`);
    },
};
export default ZonesService;