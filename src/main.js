import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import ButtonBase from "@/components/base/ButtonBase";
const app = createApp(App)
app.component('button-base', ButtonBase)
app.mount('#app')
