//ver 01
 importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');
 //console.log("workbox ready",new workbox.strategies.CacheFirst); 

 console.log("workbox ready"); 

 /* workbox.routing.registerRoute(
  new RegExp('https://jsonplaceholder.typicode.com/users'),
  new workbox.strategies.CacheFirst({
    cacheName: 'User-cache',
  })
); 
 */
/*  workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "null"
  },
  {
    "url": "js/app.js",
    "revision": "null"
  },
  {
    "url": "css/main.css",
    "revision": "null"
  }
 ]); */

 

/* workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        workbox.expiration.Plugin({
          maxEntries: 5,
        }),
        new workbox.cacheableResponse.Plugin({
          statuses: [0, 200]
        }),
      ],
    }),
  ); */

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