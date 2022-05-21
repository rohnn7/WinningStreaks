import axios from 'axios'

//Configuring axios for api calls
const instance = axios.create({
    baseURL: 'http://localhost:10050/Host/MMService.svc'
});

export default instance;