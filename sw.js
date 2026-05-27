self.addEventListener('install', () => console.log('🐾 FurClock Service Worker installed'));
self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});