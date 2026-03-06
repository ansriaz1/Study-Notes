const cacheName = "notes-app-v1"

const files = [
"index.html",
"style.css",
"app.js",
"manifest.json"
]

self.addEventListener("install", e=>{
e.waitUntil(
caches.open(cacheName).then(cache=>{
return cache.addAll(files)
})
)
})

self.addEventListener("fetch", e=>{
e.respondWith(
caches.match(e.request).then(res=>{
return res || fetch(e.request)
})
)
})
