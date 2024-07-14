import { createApp } from 'vue'
import './assets/style/style.scss'
import i18n from './locales/i18n';
import router from './router/router';
import { createPinia } from 'pinia';
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()

app.use(i18n).use(router).use(pinia).mount('#app')