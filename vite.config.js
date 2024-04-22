import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(),
  ],
  env: {
    SUPABASE_URL: process.env.REACT_APP_SUPABASE_URL,
    SUPABASE_KEY: process.env.REACT_APP_SUPABASE_KEY,
  },
});