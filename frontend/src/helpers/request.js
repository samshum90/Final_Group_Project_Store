// import AuthenticationService from '../service/AuthenticationService';
const auth = sessionStorage.getItem('JWT')

class Request {

	get(url) {
		if(auth === null){
		return fetch(url)
			.then((res) => res.json())
			.catch((err) => console.log(err));
		}else{
			return fetch(url, {
				headers: { 'Content-Type': 'application/json', 'Authorization': auth },
			}).then((res) => res.json())
			.catch((err) => console.log(err));
		}
	}

	delete(url) {
		return fetch(url, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json', 'Authorization': auth },
		}).catch((err) => console.log(err));
	}

	post(url, payload) {
		// console.log(config);
		// console.log('auth: ', auth)
		return fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json', 'Authorization': auth, },
			body: JSON.stringify(payload),
		}).catch((err) => console.log(err));
	}

	patch(url, payload) {
		return fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json', 'Authorization': auth, },
			body: JSON.stringify(payload),
		}).catch((err) => console.log(err));
	}
}

export default Request;
