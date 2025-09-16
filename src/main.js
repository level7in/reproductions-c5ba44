import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import svgSprite from './icons/svgSprite'

const app = createApp(App)
app.use(svgSprite)
app.component('Test1', defineAsyncComponent(() => import('./components/Test1.vue')))
app.component('Test2', defineAsyncComponent(() => import('./components/Test2.vue')))
app.component('Test3', defineAsyncComponent(() => import('./components/Test3.vue')))
app.mount('#app')
