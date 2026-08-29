import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // server:{'host': true,'allowedHosts': ['localhost', 'ffed-103-69-224-40.ngrok-free.app']},
});
