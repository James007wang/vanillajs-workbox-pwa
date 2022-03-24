//ver 01
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
console.log("workbox ready");

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

/* workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  );
 */
/* workbox.precaching.precacheAndRoute([
  {
    "url": "css/main.css",
    "revision": "nul"
  },
  {
    "url": "index.html",
    "revision": "null"
  {
    "url": "js/app.js",
    "revision": "null"
  }
]); */