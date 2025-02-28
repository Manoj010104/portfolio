import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/Manoj010104/portfolio', // Replace 'portfolio' with your repository name
  plugins: [react()],
});
