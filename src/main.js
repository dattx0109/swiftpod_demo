import './assets/css/style.css'
import './assets/css/icomoon.css'
import router from './router'
import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
// Sweet Alert Start
import Swal from 'sweetalert2'
window.Swal = Swal;
// Sweet Alert End

createApp(App).use(router).use(store).mount('#app')
