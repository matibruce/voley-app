const CACHE_NAME = 'voley-stats-v4';
const ASSETS = [
  './',
  './index.html',
  'https://cdn-icons-png.flaticon.com/512/1169/1169971.png'
];

// Instalar y guardar en caché
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Responder desde caché cuando no hay red
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});