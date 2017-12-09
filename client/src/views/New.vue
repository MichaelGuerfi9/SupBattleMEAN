<template>
<main id="new-card">
  <button v-on:click="getRandomCard">Obtenir une nouvelle carte</button>
    <deck-card v-bind:style="{display : check}" :card="this.card"></deck-card>
</main>
</template>
<script>
import CardService from '../services/CardService'
import Card from '../components/Card'
export default {
    name : 'new-card',
    components: {Card},
    data() {
        return {
            card : {},
            check : 'none'
        }
    },
  methods: {
      getRandomCard(){
          CardService.getRandomCard(this.$session.get('userConnected'))
            .then(card =>
                this.card = card,
                this.check = 'block',
            )
      }
  }
}
</script>

