// On install, cache some stuff
const PRECACHE = "precache-v1";
const RUNTIME = "runtime";
const PRECACHE_URLS = [
	"/logo.svg",
	"/logo-dark.svg",
	"/assets/images/icons/dropdown.svg",
	"/assets/fonts/SVN-Poppins.woff2",
	"/assets/fonts/SVN-PoppinsBold.woff2",
	"/assets/fonts/SVN-PoppinsBoldItalic.woff2",
	"/assets/fonts/SVN-PoppinsItalic.woff2",
	"/assets/fonts/SVN-PoppinsSemiBold.woff2",
];
self.addEventListener("install", function (event) {
	event.waitUntil(
		caches.open(PRECACHE_URLS).then(function (cache) {
			return cache.addAll(PRECACHE_URLS);
		})
	);
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener("activate", (event) => {
	const currentCaches = [PRECACHE, RUNTIME];
	event.waitUntil(
		caches
			.keys()
			.then((cacheNames) => {
				return cacheNames.filter(
					(cacheName) => !currentCaches.includes(cacheName)
				);
			})
			.then((cachesToDelete) => {
				return Promise.all(
					cachesToDelete.map((cacheToDelete) => {
						return caches.delete(cacheToDelete);
					})
				);
			})
			.then(() => self.clients.claim())
	);
});

self.addEventListener("fetch", function (event) {
	event.respondWith(
		caches.match(event.request).then(function (response) {
			// caches.match() always resolves
			// but in case of success response will have value
			if (response !== undefined) {
				return response;
			} else {
				return fetch(event.request)
					.then(function (response) {
						// response may be used only once
						// we need to save clone to put one copy in cache
						// and serve second one
						let responseClone = response.clone();

						caches.open(RUNTIME).then(function (cache) {
							if (!/^https?:$/i.test(new URL(event.request.url).protocol)) return;
							cache.put(event.request, responseClone);
						});
						return response;
					})
					.catch(function () {});
			}
		})
	);
});
