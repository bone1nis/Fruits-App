import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Fruits-App"
})


/*  server: {
  proxy: {
    '/api': {
      target: 'https://www.fruityvice.com/api/fruit/all',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '') // proxy
    }
  }
} */