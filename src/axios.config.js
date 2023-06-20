import axios from "axios";

const http = axios.create()

http.defaults.baseURL = 'https://supershop-a5b7b-default-rtdb.firebaseio.com/'

export default http