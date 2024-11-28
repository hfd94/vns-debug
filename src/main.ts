import { registerPlugins } from '@/plugins'
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import { registerStore } from '@/stores'

const app = createApp(App)

registerStore(app)
registerPlugins(app)

app.mount('#app')
