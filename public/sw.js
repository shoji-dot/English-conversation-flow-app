// Talk Flow用の最小限のService Worker。
// 「ネットワーク優先、失敗時はキャッシュから返す」方式。
// 展示会・出張先など通信が不安定な場面で、一度表示したページを
// オフラインでも開けるようにすることが目的（事前の全件キャッシュはしない）。
const CACHE_NAME = "talkflow-cache-v1";

self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // GET以外・他オリジンへのリクエストは素通し(キャッシュ対象外)
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        const response = await fetch(request);
        cache.put(request, response.clone());
        return response;
      } catch (err) {
        const cached = await cache.match(request);
        if (cached) return cached;
        throw err;
      }
    })
  );
});
