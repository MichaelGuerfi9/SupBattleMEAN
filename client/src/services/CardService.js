import axios from 'axios'

const API_ENDPOINT = '//localhost:1337'

export default {
    getRandomCard(){
        return axios.get(`${API_ENDPOINT}/card`)
        .then(res => res.data)
        .catch(console.error)
    },
    createCard(){
        return axios.get(`${API_ENDPOINT}/newCard/`)
        .then(res => res.data)
        .catch(console.error)
    },
    fetchAll(){
        return axios.get(`${API_ENDPOINT}/cards`)
        .then(res => res.data)
        .catch(console.error)
    },
}