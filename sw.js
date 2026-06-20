const CACHE_NAME = 'pwa-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/index.css',
  '/index.js'
];

// Cache core assets during installation
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Intercept network requests to serve cached assets offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});