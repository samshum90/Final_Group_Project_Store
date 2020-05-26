import axios from 'axios'


const API_URL = 'http://localhost:8080'
// const ADMIN_API_URL = `${API_URL}/admin/${ADMIN}`


export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';


class AuthenticationService {


    // executeBasicAuthenticationService(username, password) {
    //     return axios.get(`${API_URL}/basicauth`,
    //         { headers: { authorization: this.createBasicAuthToken(username, password) } })
    // }

    executeJwtAuthenticationService(username, password) {
       
        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        }).then(
           (data) => this.registerSuccessfulLoginForJwt(username, data.data.token )
        )

    }


    registerSuccessfulLoginForJwt(username, token) {

        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        // this.setupAxiosInterceptors(this.createJWTToken(token))
        sessionStorage.setItem('JWT', this.createJWTToken(token))
        this.getUsersID(username, sessionStorage.getItem('JWT'))
        // console.log(sessionStorage)
        // console.log(this.isUserLoggedIn());
    }

    getUsersID(username, token){
        const URL = API_URL + '/users/?username=' + username
        fetch(URL, {
         headers: { 'Content-Type': 'application/json', 'Authorization': token }})
        .then((res) => res.json())
        .then((data) => data[0].id)
        .then(id => sessionStorage.setItem('UserId', id))
		.catch((err) => console.log(err));
    }

    createJWTToken(token) {

        return 'Bearer ' + token
    }


    logout() {
        sessionStorage.clear();
        window.location.replace('/') 
        // console.log(sessionStorage)
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    setupAxiosInterceptors(token) {
        axios.interceptors.request.use(
            (config) => {
               
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                 }
            
                return config
            }
        )
    }
}

export default new AuthenticationService()