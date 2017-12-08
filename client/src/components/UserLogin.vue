<template>
<form class="" @submit.prevent="login">

  <div class="email">
    <label for="email">Email</label>
    <input type="email" name="email" value="" id="email" placeholder="john.doe@example.com" v-model="user.email" v-model.trim="user.email" @input="$v.user.email.$touch()">
  </div><span class="form-group__message" v-if="!$v.login.email.required && $v.login.email.$dirty">Field is required</span><span class="form-group__message" v-if="!$v.login.email">Not valid email</span>

  </div>

  <div class="password">
    <label for="password">Mot de passe</label>
    <input type="password" name="password" value="" id="password" placeholder="Mot de passe" v-model="user.password" v-model.trim="user.password" @input="$v.user.password.$touch()">
  </div><span class="form-group__message" v-if="!$v.login.password.required && $v.login.password.$dirty">Field is required</span>

  </div>

  <input type="submit" name="" value="Login" >
</form>
</template>

<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
   name : "user-login",

   data() {
       return {
           user : {
               email: '',
               password: ''
           }
       }
   },
   methods: {
     login(){
       this.$emit("login", this.user)
     }
   },
   validations: {
    login: {
       password: {
         required,
         minLength: minLength(6)
       },
       email: {
         required,
         email,
       },
     }
   }
 }

</script>
