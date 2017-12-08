<template>
  <main id="app">

    <header>
      <nav class="container">
          <router-link v-if="this.$session.exists()" to="/">Accueil</router-link>
          <router-link v-if="this.$session.exists()" to="/deck">Liste des decks</router-link>
          <router-link v-if="this.$session.exists()" to="/new">Obtenir de nouvelles cartes</router-link>
          <router-link v-if="!this.$session.exists()" to="/login">Se connecter / S'inscrire</router-link>
      </nav>
    </header>


    <router-view></router-view>

  </main>
</template>

<script>
import LoginView from './views/Login.vue'
import HomeView from './views/Home.vue'
import ListView from './views/Deck.vue'
import NewView from './views/New.vue'


export default {
  name: 'app',

  components : { ListView, HomeView, NewView, LoginView },
  data() {
       return {
           userConnected : {
            userId:''
           }
       }
   },

}
</script>

<style lang="scss">
body {
  margin: 0;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

/**
 * Style du header
 */

header {
  background-color: #42b983;
  overflow: hidden;
  margin-bottom: 3em;

  > .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
  }

  a:link,
  a:visited {
    color: white;
    text-decoration: none;
    display: inline-block;
    padding: 0.75em 1em;
    transition: all 150ms;
    transform: scale(1);
  }

  a:hover {
    background-color: #128953;
    transform: scale(1.05);
  }
  a:active {
    transition: none;
    color: #128953;
    background-color: #82f9c3
  }

  a:last-of-type {
    margin-left: auto;
  }
}

/**
 * Styles pour un bouton
 */

.btn {
  display: inline-block;
  padding: 0.5em 1.4em;
  color: #fff;
  text-decoration: none;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  background: linear-gradient(to bottom, #42b983, #128953);
}
.btn:hover {
  background: linear-gradient(to bottom, #42b983 50%, #128953);
}
.btn:active {
  background: linear-gradient(to bottom, #128953, #42b983 50%);
}

/**
 * Styles génériques
 */

.actions {
  margin-top: 1.4em;
}

.fa-icon { vertical-align: middle }

</style>
