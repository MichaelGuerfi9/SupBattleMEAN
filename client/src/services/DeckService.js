import axios from 'axios'

const API_ENDPOINT = '//localhost:1337'

export default {
    getDecks(user){
        return axios.get(`${API_ENDPOINT}/decks`,{
            params: {
                user
            }
        })
        // .then(res => res.data)
        .catch(console.error)
    },
    createDeck(cards){
        return axios.post(`${API_ENDPOINT}/createDecks`,cards)
        .then(res => res.data)
        .catch(console.error)
    },
    updateDeck(deck){
        return axios.put(`${API_ENDPOINT}/editDeck`+deck._id)
        .then(res => res.data)
        .catch(console.error)
    },
    deleteDeck(deck){
        return axios.get(`${API_ENDPOINT}/deleteDeck`+deck._id)
        .then(res => res.data)
        .catch(console.error)
    },
}