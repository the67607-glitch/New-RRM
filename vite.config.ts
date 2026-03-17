import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify — file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      proxy: {
        '/streampay-api': {
          target: 'https://stream-app-service.streampay.sa',
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/streampay-api/, '/api'),
          headers: {
            'x-api-key': env.VITE_STREAM_X_API_KEY || '',
            'Origin': 'https://stream-app-service.streampay.sa',
          },
        },
      },
    },
  };
});
