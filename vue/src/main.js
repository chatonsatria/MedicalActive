import { createApp } from 'vue'
// import store
import store from './store'
// import router (vue-router for this vue project)
import router from './router'
// default import from vue
import App from './App.vue'
// import tailwind.css
import './index.css'

createApp(App)
.use(store)
.use(router)
.mount('#app')
