const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/coffee1.jpg",
  "/images/coffee2.jpg",
  "/images/coffee3.jpg",
  "/images/coffee4.jpg",
  "/images/coffee5.jpg",
  "/images/coffee6.jpg",
  "/images/coffee7.jpg",
  "/images/coffee8.jpg",
  "/images/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
 console.log('start');
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {console.log('store assets')
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {console.log(res);
        return res || fetch(fetchEvent.request)
      })
    )
  })

// self.addEventListener('fetch', event => {
//   const {request} = event;
//   const url = new URL(request.url);
//   if(url.origin === location.origin) {
//       event.respondWith(cacheData(request));
//   } else {
//       event.respondWith(networkFirst(request));
//   }

// });


// async function cacheData(request) {
//   const cachedResponse = await caches.match(request);
//   return cachedResponse || fetch(request);
// }

// async function networkFirst(request) {
//   const cache = await caches.open('dynamic-meme');

//   try {
//       const response = await fetch(request);
//       cache.put(request, response.clone());
//       return response;
//   } catch (error){
//       return await cache.match(request);

//   }

// }

//   self.addEventListener('appinstalled', (event) => {
//     console.log('👍', 'appinstalled', event);
//   });  