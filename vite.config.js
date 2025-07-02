import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          ui: ['@mui/material', '@emotion/react'], // example if you're using MUI
        }
      }
    },
    chunkSizeWarningLimit: 1000
  }
})

