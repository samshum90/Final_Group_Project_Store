import AuthenticationService from '../service/AuthenticationService';

class Request {


    login(url) {
      const username = "user"
      const password = "e0821b18-aab5-4683-b543-38d48956524d"

      AuthenticationService.executeBasicAuthenticationService(username, password)
      .then(() => {
          AuthenticationService.registerSuccessfulLogin(username, password)
      }).catch(() => {
          // this.setState({ showSuccessMessage: false })
          // this.setState({ hasLoginFailed: true })
      })
      
    }

    get(url){

      return fetch(url)
      .then((res) => res.json())
      .catch(err => console.log(err))
    }

    delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}
      })
    }

    post(url, payload){
      return fetch(url, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

    patch(url, payload){
      return fetch(url, {
        method: "PATCH",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)
      })
    }

}

export default Request;