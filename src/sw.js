import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching';
import { registerRoute, NavigationRoute } from 'workbox-routing';
import { createHandlerBoundToURL } from 'workbox-precaching';

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// Precache và cleanup
precacheAndRoute(self.__WB_MANIFEST || []);
cleanupOutdatedCaches();

// Điều hướng fallback cho SPA
registerRoute(
  new NavigationRoute(createHandlerBoundToURL('index.html'))
);

// Push Notification handler
self.addEventListener('push', (event) => {
  const data = event.data?.json() || {};
  const notificationTitle = data.title || '🔔 Thông báo';
  const notificationOptions = {
    body: data.body || 'Bạn có thông báo mới!',
    data: { url: data.url || 'https://locket-dio.space' }, // truyền URL để redirect khi click
    icon: '/android-chrome-192x192.png',
    badge: '/maskable_icon.png',
  };

  event.waitUntil(
    self.registration.showNotification(notificationTitle, notificationOptions)
  );
});

// Click handler: mở tab hoặc focus vào web
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  const urlToOpen = event.notification.data?.url || "https://locket-dio.space";

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});
