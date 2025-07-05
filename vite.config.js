import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
           // example if you're using MUI
        }
      }
    },
    chunkSizeWarningLimit: 2000
  }
})

