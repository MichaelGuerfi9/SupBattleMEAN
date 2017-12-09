<template>
 <main id="userlogin-view">
     <div class="container">
         <div style="float:left;">
             <h4>Connexion :</h4>
            <user-login @login="loginUser"></user-login>
         </div>
         <div style="float:right;">
             <h4>Inscription</h4>
            <user-register @register="registerUser"></user-register>
         </div>
     </div>
 </main>
</template>
<script>
import UserLogin from '../components/UserLogin'
import UserRegister from '../components/UserRegister'
import UserService from '../services/UserService'
// import VueSession from 'vue-session'

export default {
  name : "login-view",
  components: {UserLogin, UserRegister},
    data() {
       return {
           userConnected : {
            userId:''
           }
       }
   },
  methods: {
     loginUser(user){
         this.$session.start()
         const session = this.$session
         UserService.login(user)
         .then(function(res){
             if(res.status === 200 && res.data){
                 session.set('userConnected',res.data);
                 location.assign('/')
             }
         })
     },
    registerUser(user){
         this.$session.start()
         const session = this.$session
         UserService.register(user)
         .then(function(res){
             if(res.status === 200 && res.data){
                 session.set('userConnected',res.data);
                 location.assign('/')
             }
         })
     }
   },
 }
</script>
