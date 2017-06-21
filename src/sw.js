self.addEventListener('fetch', function fetcher(event) {
  const request = event.request;

  console.log(request.url);

  if (request.url.indexOf('assets') > -1 || request.url.indexOf('index.html') > -1) {
    console.log('Handling fetch event for', event.request.url);

    event.respondWith(
      caches.match(event.request).then((response) => (
        // response if there is a cache
        // fetch if there is nothing cached and then cache it
        response || fetch(request).then(response_two => {
          caches
            .open('JPEER_CACHE_SW')
            .then((cache) => {
              cache.put(request.url, response_two);
            });
        })
      ))
    );
  }
});
