/// <reference types="vitest" />

import path from 'node:path';

import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import pkg from './package.json' with { type: 'json' };

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  define: {
    __API_URL__: 'window.__backend_api_url',
    __APP_VERSION__: JSON.stringify(pkg.version)
  },
  plugins: [
    tsConfigPaths({
      projects: ['./tsconfig.app.json', './tsconfig.node.json']
    }),
    react(),
    tailwindcss()
  ]
});
