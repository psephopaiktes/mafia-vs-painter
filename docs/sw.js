//キャッシュ名
var CACHE_NAME = 'mvp-cache-v1';

//キャッシュに入れるリソースのパス
var urlsToCache = [
  '/',
  '/js/',
];


self.addEventListener('install', function(event) {
  event.waitUntil(
    //キャッシュの中に必要なリソースを格納する
    caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(urlsToCache);
    })
  );
});


self.addEventListener('activate', function(event) {
  event.waitUntil(
    //現在のキャッシュをすべて取得する
    caches.keys().then(function(cache) {
      //新しいキャッシュ以外は削除する
      cache.map(function(name) {
        if(CACHE_NAME !== name) caches.delete(name);
      })
    })
  );
});


self.addEventListener('fetch', function(event) {
  event.respondWith(
    //リクエストに応じたリソースがキャッシュにあればそれを使う
    caches.match(event.request).then(function(res) {
        if(res) return res;
        return fetch(event.request);
    })
  );
});
