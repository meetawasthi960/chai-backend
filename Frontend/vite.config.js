import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/jokes': {
        target: 'http://localhost:3000', // ✅ Backend server
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()],
});
