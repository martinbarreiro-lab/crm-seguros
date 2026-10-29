// Service worker mínimo: permite instalar el CRM como aplicación.
// No guarda nada en caché: siempre trae la versión publicada.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
