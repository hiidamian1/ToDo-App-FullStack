import axios from 'axios';

const url = '/api/users/';

class UserService {

    static registerUser(username, password) {
        return axios.post(`${url}register`, {
            username, 
            password
        });
    }

    static verifyUser(username, password) {
        return axios.post(`${url}login`, {
            username, 
            password
        });
    }

    static authenticateUser() {
        return axios.get(`${url}authenticate`);
    }
}

export default UserService;