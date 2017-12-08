import axios from 'axios'

const API_ENDPOINT = '//localhost:1337'

export default {
    register(user){
        return axios.post(`${API_ENDPOINT}/register`,user)
        .catch(console.error)
    },
    login(user){
        return axios.post(`${API_ENDPOINT}/login`,user)
        .catch(console.error)
    },
    getAllCards(user){
        return axios.get(`${API_ENDPOINT}/getCards`,{
            params: {
              user
            }
        })
        // .then(res => res.data)
        .catch(console.error)
    },
    logout(user){
        return axios.post(`${API_ENDPOINT}/logout`,user)
        .then(function(res){
            console.log(res)
        })
        .catch(console.error)
    },
}