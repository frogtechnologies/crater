import { defineConfig } from 'laravel-vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    build: {
        target: ['es2020']
    },
    server: {
        watch: {
            ignored: ['**/.env/**'],
        },
    },
    resolve: {
        alias: {
            "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js"
        }
    }
}).withPlugins(
    vue
)
