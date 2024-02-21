import api from "./api"

const NotificationsService = {

    get_S_Notifications() {
        return api().get("/seen_notifications");
    },

    getCount_S_Notifications() {
        return api().get(`/count_s_notifications`);
    },

    get_NS_Notifications() {
        return api().get(`/notifications`);
    },

    getCount_NS_Notifications() {
        return api().get(`/count_notifications`);
    },

    see_notification(id) {
        return api().put(`/notifications/${id}`);
    }

};

export default NotificationsService;