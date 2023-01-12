import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/Produkter', component: ProductsPage }
    ]
})

createApp(App)
    .use(router)
    .mount('#app')