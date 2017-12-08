<template>
<form class="" @submit.prevent="register">

  <div class="name">
    <label for="lastname">Nom</label>
    <input type="text" name="lastname" value="" id="lastname" placeholder="DOE" v-model="user.lastname" v-model.trim="user.lastname" @input="$v.user.lastname.$touch()">
  </div><span class="form-group__message" v-if="!$v.user.lastname.required && $v.user.lastname.$dirty">Field is required</span>
  <span class="form-group__message" v-if="!$v.user.lastname.minLength">Name must have at least {{$v.user.lastname.$params.minLength.min}} letters.</span>

  </div>

  <div class="email">
    <label for="email">Email</label>
    <input type="email" name="email" value="" id="email" placeholder="john.doe@example.com" v-model="user.email" v-model.trim="user.email" @input="$v.user.email.$touch()">
  </div><span class="form-group__message" v-if="!$v.user.email.required && $v.user.email.$dirty">Field is required</span><span class="form-group__message" v-if="!$v.user.email.email">Not valid email</span>

  </div>

  <div class="password">
    <label for="password">Mot de passe</label>
    <input type="password" name="password" value="" id="phone" placeholder="Mot de passe" v-model="user.phone" v-model.trim="user.phone" @input="$v.user.phone.$touch()">
  </div><span class="form-group__message" v-if="!$v.user.phone.required && $v.user.phone.$dirty">Field is required</span>

  </div>

  <div class="passwordConfirm">
    <label for="date">Confirmation du mot de passe</label>
    <input type="date" name="date" value="" id="date" placeholder="28/06/1997" v-model="user.birthdate" v-model.trim="user.birthdate" @input="$v.user.birthdate.$touch()">
  </div><span class="form-group__message" v-if="!$v.user.birthdate.required  && $v.user.birthdate.$dirty">Field is required</span>

  </div>

  <input type="submit" name="" value="Register" :disabled="$v.$invalid" >
</form>
</template>
<script>
import { required, minLength, sameAs, email } from 'vuelidate/lib/validators'

export default {
   name : "user-form",

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
