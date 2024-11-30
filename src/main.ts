import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios';

import App from './App.vue'
import router from './router'

const app = createApp(App)

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:5000',
  timeout: 10000,
});

app.config.globalProperties.$axios = { ...axiosInstance };

app.use(createPinia())
app.use(router)

app.mount('#app')
