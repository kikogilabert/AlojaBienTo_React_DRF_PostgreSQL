import { useState } from 'react';
import NotificationsService from '../services/NotificationsService';



export const useNotifications = () => {
    const [seenNotifications, setSeenNotifications] = useState([]);
    const [notSeenNotifications, setNotSeenNotifications] = useState([]);
    const [countSeenNotifications, setCountSeenNotifications] = useState(0);
    const [countNotSeenNotifications, setCountNotSeenNotifications] = useState(0);

    const useSeenNotifications = () => {
        NotificationsService.get_S_Notifications()
            .then(({ data, status }) => {
                if (status === 200) {
                    setSeenNotifications(data);
                }
            })
            .catch(e => console.error(e));
    };

    const useNotSeenNotifications = () => {
        NotificationsService.get_NS_Notifications()
            .then(({ data, status }) => {
                if (status === 200) {
                    setNotSeenNotifications(data);
                }
            })
            .catch(e => console.error(e));
    };

    const useCountSeenNotifications = () => {
        NotificationsService.getCount_S_Notifications()
            .then(({ data, status }) => {
                if (status === 200) {
                    setCountSeenNotifications(data);
                }
            })
            .catch(e => console.error(e));
    };

    const useCountNotSeenNotifications = () => {
        NotificationsService.getCount_NS_Notifications()
            .then(({ data, status }) => {
                if (status === 200) {
                    setCountNotSeenNotifications(data);
                }
            })
            .catch(e => console.error(e));
    };

    const useSetSeenNotifications = (id) => {
        NotificationsService.see_notification(id)
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    setCountNotSeenNotifications(countNotSeenNotifications - 1);
                    setNotSeenNotifications(notSeenNotifications.filter(notification => notification.id !== id));
                }
            })
            .catch(e => console.error(e));
    };
    
    const useDeleteNotification = (id) => {
        NotificationsService.delete_notification(id)
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    setSeenNotifications(seenNotifications.filter(notification => notification.id !== id));
                }
            })
            .catch(e => console.error(e));
    };

    return { 
        seenNotifications, 
        notSeenNotifications,
        countSeenNotifications,
        countNotSeenNotifications,
        useSeenNotifications, 
        useNotSeenNotifications, 
        useCountSeenNotifications, 
        useCountNotSeenNotifications, 
        useSetSeenNotifications, 
        useDeleteNotification
    };
};


export default useNotifications;
