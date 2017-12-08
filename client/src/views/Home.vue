<template>
  <main id="home-view">

    <div class="container">
      <h1>Bienvenue sur Sup'Battle</h1>

      <p>Affrontez vos rivaux !</p>

      <hr>

      

      <!-- <p>Avez-vous dit bonjour aujourd'hui à :</p>

      <user-card v-if="user" :user="user" @remove="removeUser"></user-card>

      <div class="actions">
        <a href="#" @click.prevent="randomUser" class="btn">
          <icon name="random" /> Dire bonjour à quelqu'un d'autre
        </a>
      </div> -->

    </div><!-- .container -->
  </main>
</template>

<script>
// import UserCard from '../components/UserCard.vue'
// import UserService from '../services/UserService'

export default {
  name: 'home-view',

//   components: { UserCard },

//   data () {
//     return {
//       user : null,
//       users: []
//     }
//   },

//   methods: {
//     // Prend un utilisateur au hasard dans le tableau 'users'
//     randomUser() {
//       this.user = this.users[ Math.floor(Math.random() * this.users.length) ]
//     },
//     removeUser(user){
//       UserService.removeUser(user)
//       .then(res => {
//         var index = this.users.indexOf(user)
//         this.users.splice(index,1)
//         this.randomUser()
//     })
//     }
//   },

//   // Lorsque le composant App est initialisé par Vue.js, on charge un utilisateur au hasard
//   created() {
//     UserService.fetchAll()
//     .then(users => {
//           this.users = users
//           this.randomUser()
//         })
//     // this.randomUser()
//   }
}
</script>
