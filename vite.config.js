// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Service worker update otomatis
      includeAssets: [
        'vite.svg',
        'robots.txt',
        'icons/icon.png',
        'icons/icon-192.png'
      ],
      manifest: {
        name: 'Aplikasi Bengkel Online',
        short_name: 'BengkelApp',
        description: 'Cari dan booking bengkel terdekat dengan mudah',
        theme_color: '#0d9488', // Sesuaikan dengan tema kamu
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icons/icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        screenshots: [
          {
            src: 'screenshots/ss4.png',
            type: 'image/jpeg',
            sizes: '540x960',
            label: 'Halaman utama (portrait)'
          },
          {
            src: 'screenshots/ss1.png',
            type: 'image/jpeg',
            sizes: '960x540',
            label: 'Halaman utama (landscape)'
          },
          {
            src: 'screenshots/ss5.png',
            type: 'image/jpeg',
            sizes: '540x960',
            label: 'Daftar bengkel (portrait)'
          },
          {
            src: 'screenshots/ss2.png',
            type: 'image/jpeg',
            sizes: '960x540',
            label: 'Daftar bengkel (landscape)'
          },
          {
            src: 'screenshots/ss3.png',
            type: 'image/jpeg',
            sizes: '960x540',
            label: 'Form booking layanan (landscape)'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages',
            }
          },
          {
            urlPattern: ({ request }) =>
              ['style', 'script', 'worker'].includes(request.destination),
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'assets',
            }
          },
          {
            urlPattern: ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 tahun
              },
            },
          }
        ]
      }
    })
  ]
});
