import axios from 'axios';


const API_URL = 'http://localhost:8080'
// const ADMIN_API_URL = `${API_URL}/admin/${ADMIN}`


export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
export const USER_ID = 'userId';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


class AuthenticationService {

    constructor() {

        this.registerSuccessfulLoginForJwt = this.registerSuccessfulLoginForJwt.bind(this);
        this.createJWTToken = this.createJWTToken.bind(this);
        this.getUsersID = this.getUsersID.bind(this);
        this.reload = this.reload.bind(this)
    }


    executeJwtAuthenticationService(username, password) {

        return axios.post(`${API_URL}/authenticate`, {
            username,
            password
        }).then(
            (data) => this.registerSuccessfulLoginForJwt(username, data.data.token)
        ).then(token => this.setJWTInSession(token))
            .then(token => this.getUsersID(username, token))
            .then(
                setTimeout(this.reload, 163)
            )

    }
    reload() {
        window.location.replace('/')
    }


    registerSuccessfulLoginForJwt(username, token) {
        console.log(username + token)
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        return token
        // sessionStorage.setItem('JWT', this.createJWTToken(token))
        // this.getUsersID(username, sessionStorage.getItem('JWT'))
        //    Promise.resolve(sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username).promise()).then(function(){ 
        //        return Promise.resolve(sessionStorage.setItem('JWT', AuthenticationService.createJWTToken(token)).promise())}).then(function() { 
        //            return Promise.resolve(AuthenticationService.getUsersID(username, sessionStorage.getItem('JWT')).promise())})
    }

    setJWTInSession(token) {
        sessionStorage.setItem('JWT', this.createJWTToken(token))
        return token
    }

    getUsersID(username, token) {
        console.log(username + token + " getUserId")
        const URL = API_URL + '/users?username=' + username
        console.log(URL);
        fetch(URL)
            .then(res => res.json())
            .then(data => data[0].id)
            .then(id => { sessionStorage.setItem(USER_ID, id) })
            .catch((err) => console.log(err))

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