import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/HomePage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductPage from './pages/ProductPage.vue'
import ContactPage from './pages/ContactPage.vue'
import LoginPage from './pages/LoginPage.vue'

const history = createWebHistory()
const router = createRouter({
    history,
    routes: [
        { path: '/', component: Home },
        { path: '/Produkter', component: ProductsPage },
        { path: '/Produkt/:id', component: ProductPage, props: true, name: 'Produkt' },
        { path: '/Kontakt', component: ContactPage, beforeEnter: guard },
        { path: '/Login', component: LoginPage }
    ],
    
    
})
function guard(to, from, next) {
    if (localStorage.getItem("token") !== null) {
        next()
    } else {
        next('/Login')
    }
}



createApp(App)
    .use(router)
    .mount('#app')