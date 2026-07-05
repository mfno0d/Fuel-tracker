const CACHE_NAME = 'pitstop-v2'; // Changing v1 to v2 breaks the old cache

const ASSETS = [
  './',
  './index.html',
  'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
