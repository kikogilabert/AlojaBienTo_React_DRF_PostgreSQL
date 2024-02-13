import axios from 'axios';
import JwtService from './JwtService';


const Axios = () => {
    let api = null;

    if (JwtService.getToken()) {
        api = axios.create({
            baseURL: 'http://localhost:8888/api',
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${JwtService.getToken()}`
            }
        });
    } else {
        api = axios.create({
            baseURL: 'http://localhost:8888/api',
            headers : {
                'Content-Type': 'application/json'
        }
    });
    }  
    return api;
}
export default Axios;