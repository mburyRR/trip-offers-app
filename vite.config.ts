import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

const faviconURL = '/favicon-32x32.png';
const faviconLargeURL = '/favicon.png';
const screenshotURL = '/dashboard.png';
const screenshotMobileURL = '/dashboardMobile.png';

export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@store': path.resolve(__dirname, './src/store'),
      '@services': path.resolve(__dirname, './src/services'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@data': path.resolve(__dirname, './data'),
    },
  },
  plugins: [
    react(),
    eslint({
      include: [`${path.resolve(__dirname, '')}/**/*.{js, ts, tsx}`],
    }),
    svgr(),
    VitePWA({
      devOptions: {
        enabled: true,
      },
      includeAssets: ['**/*'],
      manifest: {
        theme_color: '#efefef',
        background_color: '#efefef',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        short_name: 'trip-offers-app',
        description: 'Trip offers app',
        name: 'Trip offers app',
        icons: [
          {
            src: faviconURL,
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: faviconLargeURL,
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: screenshotURL,
            sizes: '1919x982',
            type: 'image/png',
            form_factor: 'wide',
            label: 'dashboard',
          },
          {
            src: screenshotMobileURL,
            sizes: '426x925',
            type: 'image/png',
            label: 'dashboard',
          },
        ],
      },
    }),
  ],
});
