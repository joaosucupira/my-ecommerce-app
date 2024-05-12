// ecommerce api

import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1/api"
});

// async function login(email, password){
//     try {
//         const response = await api.post('/login', {email, password});
//         const { acces_token } = response.data;
//         localStorage.setItem('acces_token', acces_token);
//         return response.data;
        
//     } catch (error) {
//         throw new Error('Counld not login.');
        
//     }
// }
// export { login };
export default api;
