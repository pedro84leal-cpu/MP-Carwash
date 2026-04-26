import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: {
      overlay: true,  // mostra erros no navegador
    },
    watch: {
      usePolling: true,  // força verificação de alterações (útil no Windows)
    },
    // Força reload completo da página em vez de HMR
    force: true,
  },
})