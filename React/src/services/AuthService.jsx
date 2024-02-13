import api from './api';

const AuthService = {

    getAllUsers() {
        return api().get('users');
    },

    Register(data) {
        return api().post('register', { 'user': data });
    },

    Login(data) {
        return api().post('login', { 'user': data });
    },

    getUser() {
        return api().get('user');
    },

    refreshToken() {
        return api().get('refresh_token');
    },

    getProfile(id) {
        return api().get(`profile/${id}`);
    },

    updateProfile(id, user_data, profile_data) {
        return api().put(`profile/${id}`, { 'user': user_data, 'profile': profile_data } );
    },

    getUserScooter() {
        return api().get('userScooter');
    },

    getUserStats(id) {
        return api().get(`profile_stats/${id}`);
    },

    deleteUser(uuid) {
        return api().delete(`user/${uuid}`);
    },
}

export default AuthService;