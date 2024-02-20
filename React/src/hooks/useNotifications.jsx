import { useState } from 'react';
import NotificationsService from '../services/NotificationsService';



export const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);
    const [count_notifications, setCount_notifications] = useState(0);



const useSeenNotifications = () => {
    NotificationsService.get_S_Notifications()
        .then(({ data, status }) => {
            if (status === 200) {
                console.log(data);
                setNotifications(data);
            }
        })
        .catch(e => console.error(e));
};


const useNotSeenNotifications = () => {
    NotificationsService.get_NS_Notifications()
        .then(({ data, status }) => {
            if (status === 200) {
                console.log(data);
                setNotifications(data);
            }
        })
        .catch(e => console.error(e));
};

const useCountNotSeenNotifications = () => {
    NotificationsService.getCount_NS_Notifications()
        .then(({ data, status }) => {
            if (status === 200) {
                console.log(data);
                setCount_notifications(data);
                console.log(count_notifications);
            }
        })
        .catch(e => console.error(e));
};

const useCountSeenNotifications = () => {
    NotificationsService.getCount_S_Notifications()
        .then(({ data, status }) => {
            if (status === 200) {
                console.log(data);
                setCount_notifications(data);
            }
        })
        .catch(e => console.error(e));
};


    return { notifications, count_notifications, setCount_notifications, useCountSeenNotifications, setNotifications, useNotSeenNotifications, useSeenNotifications, useCountNotSeenNotifications};
};

export default useNotifications;
