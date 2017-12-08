<template>
 <main id="deckView">
     <div class="container">
        <button v-on:click="newDeck">Nouveau deck</button>
        <h2>Vos cartes</h2>
        <div>
        <div v-for="(card,i) in cards" :key="i" class="card" style="width: 20%;">
                <!-- set a width on the image otherwise it will expand to full width       -->
                <img class="card-img-top img-fluid" :src="card.imageUrl" alt="Card image cap" width="10">
                <div class="card-body">
                    <h4 class="card-title">{{card.name}}</h4>
                    <p class="card-text">{{card.description}}</p>
                </div>
        </div>
        </div>
        <!-- <div v-for="(deck,i) in decks" :key="i">
            <div class="card-deck">
                <div v-for="(card,i) in deck.cards" :key="i" class="card">
                    <!-- set a width on the image otherwise it will expand to full width       -->
                    <!-- <img class="card-img-top img-fluid" :src="card.imageUrl" alt="Card image cap" width="400">
                    <div class="card-body">
                        <h4 class="card-title">{{card.name}}</h4>
                        <p class="card-text">{{card.description}}</p>
                    </div>
                </div>
            </div>
        </div> --> -->
     </div>
 </main>
</template>
<script>
import DeckService from '../services/DeckService'
import UserService from '../services/UserService'
// import VueSession from 'vue-session'

export default {
  name : "login-view",
//   components: {UserLogin, UserRegister},
    data() {
       return {
           decks : [],
           cards: [],
           selectedCards : [],
       }
   },
   methods: {
        newDeck(){
            DeckService.createDeck()
        }
   },
    created() {
        DeckService.getDecks()
        .then(decks => {
            this.decks = decks
        })
        UserService.getAllCards(this.$session.get('userConnected'))
        .then(cards => {
            console.log(cards.data[0])
            this.cards = cards.data[0].cards
        })
  }
 }
</script>
