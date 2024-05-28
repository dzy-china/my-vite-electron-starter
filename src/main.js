import { createApp } from 'vue'
import App from '@/App'
import { createPinia } from 'pinia'
import router from '@/router/routes'

const app = createApp(App)

const pinia = createPinia();


app.use(pinia)

app.use(router)

app.mount('#app')
