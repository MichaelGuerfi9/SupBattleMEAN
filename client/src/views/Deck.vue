<template>
 <main id="deckView">
     <div class="container">
         <form action="" @submit.prevent="newDeck">
             <select name="card1" id="card1" v-model="selectedCards[1]">
                <option disabled selected value>Choississez une carte</option>
                <option  v-for="(card,i) in cards" :key="i" :value="card">
                    <span >
                        {{card.name}}
                    </span>
                </option>
             </select>
            <select name="card2" id="card2" v-model="selectedCards[2]">
                <option disabled selected value>Choississez une carte</option>
                <option  v-for="(card,i) in cards" :key="i" :value="card">
                    <span>
                        {{card.name}}
                    </span>
                </option>
             </select>
             <select name="card3" id="card3" v-model="selectedCards[3]">
                <option disabled selected value>Choississez une carte</option>
                <option  v-for="(card,i) in cards" :key="i" :value="card">
                    <span>
                        {{card.name}}
                    </span>
                </option>
             </select>
             <br>
             <br>
             <br>
             <input type="submit" value="Créer un deck" >
         </form>

         <div class="decks">
             <h2>Vos decks</h2>
             <div v-for="(deck,i) in decks" :key="i">
                 <p> <h5>  Deck {{i}}</h5>
                    <span v-for="(card,i) in deck.cards" :key="i" >
                        {{card.name}} /
                    </span>
                </p>
             </div>
         </div>
        <h2>Vos cartes</h2>
        <div v-for="(card,i) in cards" :key="i" class="card" style="width: 23%;display:inline-flex;margin:15px;">
                <!-- set a width on the image otherwise it will expand to full width       -->
            <deck-card :card="card"></deck-card>
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
import DeckCard from '../components/Card'

import { required, minLength, between } from 'vuelidate/lib/validators'

// import VueSession from 'vue-session'

export default {
  name : "login-view",
  components: {DeckCard},
//   components: {UserLogin, UserRegister},
    data() {
       return {
           decks : [],
           cards: [],
           selectedCards : [
               {userId: this.$session.get('userConnected')},
           ],
       }
   },
   methods: {
        newDeck(cards){
            console.log(this.selectedCards)
            DeckService.createDeck(this.selectedCards)
        }
   },
    created() {
        DeckService.getDecks(this.$session.get('userConnected'))
        .then(decks => {
            this.decks = decks.data
        })
        UserService.getAllCards(this.$session.get('userConnected'))
        .then(cards => {
            console.log(cards.data[0])
            this.cards = cards.data[0].cards
        })
  }
 }
</script>
