import VueRouter from 'vue-router'
import HomeView from './views/Home.vue'
import ListView from './views/Deck.vue'
import LoginView from './views/Login.vue'
import NewView from './views/New.vue'

const routes = [
   { path: '/', component: HomeView },
   { path: '/login', component: LoginView },
   { path: '/deck', component: ListView },
   { path: '/new', component: NewView }
];

const router = new VueRouter({
   routes
});

export default router
