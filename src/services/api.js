import axios from 'axios';

/* 
//Rodar com IPV4: json-server --watch -d 180 --host meuipv4 db.json
*/

const api = axios.create({
    baseURL: 'http://10.0.0.172:3000'
})

export default api;