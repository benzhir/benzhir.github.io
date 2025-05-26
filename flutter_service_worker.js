'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "2654e00f3800edabe6b26f41c0abf261",
"version.json": "1e774148354f29b06259f55413b2d895",
"index.html": "83955e084d4b69d3451e30b14e1782f2",
"/": "83955e084d4b69d3451e30b14e1782f2",
"main.dart.js": "95dd263bd3cba2087676f3f7eb30fde4",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "d3f359241661776e5153e106225a7108",
"icons/Icon-192.png": "f708716a90e59eb84bf8366179dd719b",
"icons/Icon-maskable-192.png": "f708716a90e59eb84bf8366179dd719b",
"icons/Icon-maskable-512.png": "1c29c1eddb4c8295ee52abbcbf617b56",
"icons/Icon-512.png": "1c29c1eddb4c8295ee52abbcbf617b56",
"manifest.json": "1c9e5847565bf8c3c8dd53b971fa14c6",
"assets/AssetManifest.json": "530a589da55b95a7df37f81a577abf38",
"assets/NOTICES": "8c89510c51d26f3da2075a88c8869c4e",
"assets/FontManifest.json": "0d6cd23cbf2553dee10bbfe50cb9002c",
"assets/AssetManifest.bin.json": "191b495f2c43c46f97647e6894d62f4c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "021559e20707626f2eae5f36592de308",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/fuckof1.jpg": "def0dcbc86e9b4e42273977d2448d4c7",
"assets/assets/ad.jpg": "1b8988e3d73c9986c80a57ee57ee84e8",
"assets/assets/bravo1.jpg": "4039a51b44299ac741570dda3b57e801",
"assets/assets/bg-only.jpg": "0d9728dd75ad64662e8878bd4ddbf284",
"assets/assets/bravo3.jpg": "b378aa1187487088de2aca25e31149a9",
"assets/assets/bravo2.jpg": "69e991a2c199be8369e50645ce347141",
"assets/assets/btn-bg.png": "655e73210b3fdc662600235be6610b1a",
"assets/assets/btn-bg.svg": "a62c7b82d8620cc6edca4236d4041e58",
"assets/assets/outer-roulette.png": "096652748f62001b630e4a516eafa2ba",
"assets/assets/skayria-bg.jpg": "5187128d71cb8633880e25d6d4de825d",
"assets/assets/roulette-787px.png": "f33cdcdba1b65f2c9522e4cd34fe9ac3",
"assets/assets/picker.png": "4933dc7baaa6a39ef82a7fb3e8ef82ec",
"assets/assets/lbarood.png": "3fe4297c188b3e3402a1cea9cd71b35a",
"assets/assets/cover.png": "effe6bd22171856d570011f0b77b10e6",
"assets/assets/arrow-back.svg": "455b04bbbfe8e1ad1e728fe652509e64",
"assets/assets/arrow-back.png": "cd674a749789fb0e65ed87cb784b3fdc",
"assets/assets/%25206.png": "b939371edd8d7f887418819369fcc5b0",
"assets/assets/%25204.png": "22a78da9a3d50140e865d4a14ca2a2b4",
"assets/assets/fonts/Rubik-Medium.ttf": "e785acbf5775e9bec2129f4967a75472",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "9e07cac927a9b4d955e2138bf6136d6a",
"assets/assets/%25205.png": "104188848b68c36a7710e2c91b542885",
"assets/assets/logo.svg": "996dc7f495fc5424927fd721ffd71cbd",
"assets/assets/%25202.png": "c5cc4f4809072948e2221ebaa9dca2a8",
"assets/assets/%25203.png": "806629d4a32476a8d908865d7a835f34",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
