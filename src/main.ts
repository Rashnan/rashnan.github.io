import { createApp } from 'vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css' 
import './style.css'

import { router } from './routes'
import App from './App.vue'

// primary: 4281A4
// secondary: 48A9A6
// next: E4DFDA
// next: D4B483
// next: C1666B

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'system',
        themes: {
            dark: {
                dark: true,
                colors: {
                    primary: '#4281A4',
                    secondary: '#C1666B',
                }
            },
            light: {
                dark: false,
                colors: {
                    primary: '#4281A4',
                    secondary: '#C1666B',
                }
            },
        }
        // defaultTheme: 'dark'
    }
})

const app = createApp(App)
    
app.use(vuetify)
    .use(router)
    .mount('#app')
