import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'

// import components
import About from './views/About.vue'
import Home from './views/Home.vue'
import Join from './views/Join.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/join', component: Join}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
