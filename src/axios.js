import axios from "axios";
const instance = axios.create({
	baseURL: "https://us-central1-clone-55145.cloudfunctions.net/api",
	// The API (cloud function) URL
});

export default instance;
