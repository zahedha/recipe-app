import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/recipe-app/',
  plugins: [react()],
  mode: import.meta.NODE_ENV || 'development'
})
