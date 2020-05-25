// import AuthenticationService from '../service/AuthenticationService';

class Request {

	get(url) {
		return fetch(url)
			.then((res) => res.json())
			.catch((err) => console.log(err));
	}

	delete(url) {
		return fetch(url, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
		}).catch((err) => console.log(err));
	}

	post(url, payload) {
		console.log(payload);
		return fetch(url, {
			
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		}).catch((err) => console.log(err));
	}

	patch(url, payload) {
		return fetch(url, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(payload),
		}).catch((err) => console.log(err));
	}
}

export default Request;
