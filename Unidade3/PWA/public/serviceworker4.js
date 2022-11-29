self.addEventListener("install", function(event) {
    event.waitUntil(
    caches.open("gih-cache").then(function(cache) {
    return cache.add("/index-offline.html");
    })
    );
    });



    self.addEventListener("fetch", function(event) {
        event.respondWith(
        fetch(event.request).catch(function() {
        return caches.match("/index-offline.html");
        })
        );
        });