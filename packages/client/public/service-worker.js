let doCache = true;

let CACHE_NAME = 'my-pwa-cache-v1';
let CACHE_WHITE_LIST = [CACHE_NAME];

// Сейчас кэшируются абсолютно все файлы
// политика кэширования - cache first
// наверное, стоит изменить на cache and network - отправлять данные на сервер и в случае удачного ответа обновлять кэш

this.addEventListener('install', event => {
  if (doCache) {
    console.log('INSTALL CACHE');

    event.waitUntil(
      caches
        .open(CACHE_NAME)
        .then(function (cache) {
          fetch('assets-manifest.json')
            .then(response => response.json())
            .then(urlsToCache => {
              console.log('CACHE URLS', urlsToCache);

              cache.addAll(urlsToCache);
            })
            .catch(err => {
              console.log(
                'ERROR WHILE CACHING URLS'
              );
              console.log(err);

              throw err;
            });
        })
    );
  }
});

this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keyList =>
      Promise.all(
        keyList.map(key => {
          if (!CACHE_WHITE_LIST.includes(key)) {
            console.log('DELETING CACHE: ' + key);
            return caches.delete(key);
          }
        })
      )
    )
  );
});

this.addEventListener('fetch', function (event) {
  if (doCache) {
    console.log('FETCH RESOURCE');

    event.respondWith(
      caches
        .match(event.request)
        .then(cachedFile => {
          if (cachedFile) {
            console.log(
              'CACHED RESOURCE FOUND',
              event.request.url
            );

            return cachedFile;
          } else {
            console.log(
              'CACHED RESOURCE NOT FOUND',
              event.request.url
            );
          }

          return fetch(
            event.request.clone()
          ).then(fetchedFileRes => {
            // Если что-то пошло не так, выдаём в основной поток результат, но не кладём его в кеш
            if (
              !fetchedFileRes ||
              fetchedFileRes.status !== 200 ||
              fetchedFileRes.type !== 'basic'
            ) {
              return fetchedFileRes;
            }

            caches
              .open(CACHE_NAME)
              .then(cache => {
                cache.put(
                  event.request,
                  fetchedFileRes.clone()
                );
              })
              .catch(err => {
                console.log(
                  'ERROR WHILE WHITING FILE TO CACHE'
                );
                console.log(err);
  
                throw err;
              });

            return fetchedFileRes;
          });
        })
    );
  }
});
