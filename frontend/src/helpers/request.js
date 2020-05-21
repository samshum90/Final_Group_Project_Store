import AuthenticationService from '../service/AuthenticationService';

class Request {


    get(url) {
      const username = "user"
      const password = "39121875-562c-4eac-a4f2-3a9bd2867235"

      AuthenticationService.executeBasicAuthenticationService(username, password)
      .then(() => {
          AuthenticationService.registerSuccessfulLogin(username, password)
      }).catch(() => {
          // this.setState({ showSuccessMessage: false })
          // this.setState({ hasLoginFailed: true })
      })


      
      return fetch(url +"/users", {mode:"no-cors"} )
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