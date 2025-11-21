import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
        usePolling: true,
        interval: 100,
        }
    },
  esbuild: {
    // Treat .js files as JSX so we don't have to rename files to .jsx
    loader: 'jsx'
  }
})
