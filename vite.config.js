import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true, // for comfortable browsing in browser developer tools
  },
  resolve: {
    alias: {
      components: "/src/components",
      data: "/src/data",
      styles: "/src/styles",
    } // custom alias for components and styles folders
  }
})
