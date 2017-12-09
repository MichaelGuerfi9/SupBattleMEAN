<template>
<form class="" @submit.prevent="register">

  <div class="name">
    <label for="name">Nom</label>
    <input type="text" name="name" value="" id="name" placeholder="DOE" v-model="user.name" v-model.trim="user.name" @input="$v.user.name.$touch()">

  </div>

  <div class="email">
    <label for="email">Email</label>
    <input type="email" name="email" value="" id="email" placeholder="john.doe@example.com" v-model="user.email" v-model.trim="user.email" @input="$v.user.email.$touch()">


  </div>

  <div class="password">
    <label for="password">Mot de passe</label>
    <input type="password" name="password" value="" id="password" placeholder="Mot de passe" v-model="user.password" v-model.trim="user.password" @input="$v.user.password.$touch()">

  </div>

  <div class="passwordConfirm">
    <label for="confirmPassword">Confirmation du mot de passe</label>
    <input type="password" name="confirmPassword" value="" id="confirmPassword" placeholder="Confirmer votre mdp" v-model="user.confirmPassword" v-model.trim="user.confirmPassword" @input="$v.user.confirmPasswords.$touch()">

  </div>

  <input type="submit" name="" value="Register" :disabled="$v.$invalid" >
</form>
</template>
<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
   name : "user-register",

   data() {
       return {
           user : {}
       }
   },
   methods: {
     register(){
       this.$emit("register", this.user)
     }
   },
   validations: {
     register: {
       name: {
         required,
         minLength: minLength(2)
       },
       password: {
         required,
         minLength: minLength(6)
       },
       confirmPassword: {
         sameAsPassword: sameAs('password')
       },
       email: {
         required,
         email,
       },
     },
    }
}
</script>
