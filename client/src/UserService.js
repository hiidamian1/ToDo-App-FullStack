import axios from "axios";

const url = "/api/users/";

class UserService {
    //register user
    static registerUser(username, password) {
        return axios.post(`${url}register`, {
            username, 
            password
        });
    }

    //verify user credentials
    static verifyUser(username, password) {
        return axios.post(`${url}login`, {
            username, 
            password
        });
    }

    //see if user already logged in
    static authenticateUser() {
        return axios.get(`${url}authenticate`);
    }

    //log user out
    static logoutUser() {
        return axios.get(`${url}logout`);
    }
}

export default UserService;