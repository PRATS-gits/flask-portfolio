import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: '.',
  // Use '/flask-portfolio/' for GitHub Pages deployment
  base: '/flask-portfolio/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    // Generate a manifest file for better asset handling
    manifest: true,
    // Ensure assets use relative paths
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Ensure chunks have consistent names
        manualChunks: undefined
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  // Add detailed build logging
  logLevel: 'info'
})
