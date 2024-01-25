import axios from 'axios';

const Axios = () => {
    // let api = null;

    let api = axios.create({
        baseURL: 'http://localhost:8888/api',
        headers : {
            'Content-Type': 'application/json'
        }
    });  
    return api;
}
export default Axios;