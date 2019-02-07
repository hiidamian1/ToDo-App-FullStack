import axios from 'axios';

const url = '/api/users/';

class UserService {

    static registerUser(email, password) {
        return axios.post(`${url}register`, {
            email, 
            password
        });
    }

    static verifyUser(email, password) {
        return axios.post(`${url}login`, {
            email, 
            password
        });
    }
}

export default UserService;