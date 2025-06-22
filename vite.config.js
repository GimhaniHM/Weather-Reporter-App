// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';  // ✔️ matches your plugin

export default defineConfig({
  plugins: [react()],
});
