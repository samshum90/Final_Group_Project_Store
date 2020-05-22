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
      const username = "user"
      const password = "82eb7dc9-3850-4f4e-9d80-639b9a5184b8"

      return fetch(url, 
        {headers:
        {"Authorization": 'Basic ' + window.btoa(username + ":" + password)
      }})
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