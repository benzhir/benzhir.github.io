'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4fdf96fb520a675d9a23e4c1212ae02e",
"version.json": "1e774148354f29b06259f55413b2d895",
"index.html": "83955e084d4b69d3451e30b14e1782f2",
"/": "83955e084d4b69d3451e30b14e1782f2",
"main.dart.js": "f4ac661277c99868a7e809ec268a86f1",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "d3f359241661776e5153e106225a7108",
"icons/Icon-192.png": "f708716a90e59eb84bf8366179dd719b",
"icons/Icon-maskable-192.png": "f708716a90e59eb84bf8366179dd719b",
"icons/Icon-maskable-512.png": "1c29c1eddb4c8295ee52abbcbf617b56",
"icons/Icon-512.png": "1c29c1eddb4c8295ee52abbcbf617b56",
"manifest.json": "1c9e5847565bf8c3c8dd53b971fa14c6",
".git/config": "f69cedc4cb9b96f191d34bc9c2a16285",
".git/objects/59/768efee14684fa71faa4018428f5a8d2eccab7": "2457f7fe0c6e55b57be0af1a73d228c7",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/3b/bb60e18f11add66229abf1cf9c666216a1da55": "fa03a71399f8a900feda00bef27248ff",
".git/objects/03/d25faaf3e84d6c1e6d0a572366e19ec3af9588": "060b5399ec2400075558ab021a16707f",
".git/objects/6a/1a64856013eedf385407158c2057afe6758722": "d01a85905b0bfacbfed44a0bf9e813ef",
".git/objects/56/74ed8e366ba8a75bf2451c2d5bf8b0e686f916": "add125bce762fcf7471f437865b31c54",
".git/objects/60/a1c3c6fa281f3ad5729afb4f3eded1ab460d91": "4bf653621cb4ac458d79f3e02ee656f6",
".git/objects/34/63f8b7b8980003917ad361a5c4191eb1930ac3": "800521c93690c1b86d619c503ab23124",
".git/objects/d9/33e08f2093e15796b3520f7c60d5d2f1688b4d": "6d5c74b26b96388158171a760eaa5e4e",
".git/objects/bb/0498c38b044323bab98b5bd62f0544a5598bce": "224df182cdb9fcfbd437c673171d8085",
".git/objects/d0/2207b78a7bfbdfef392936271b6b9aaa1f51d7": "46c69c2952f1567e510ad66798c4fe85",
".git/objects/be/70d8f4db5276fca7c1e4f62ac55edd2c8185c2": "18f423aa8f068c19c4b57243485b762e",
".git/objects/a5/b3d398917d2d0fe5c9b41a802ec629de023885": "c11db87972f97c1e184ae9dfba484358",
".git/objects/eb/967e3d725dc07701790664c8646c63d3d8a716": "6fe22edff7154ee296ea8754f8ac2b8e",
".git/objects/ee/f5813354512005ea2e56c9a87704727a1f60c9": "716b9f311baa61fb957cc335bdfe3719",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/0316a578c39b849656a3bb55930488aa05d1fd": "5b0253b0ad153d3eac68778e53e63c3c",
".git/objects/e3/3afd43473e10754779197293464292358090d0": "e08f61245169235aeb83666a6504c98e",
".git/objects/e3/63994ce14d0a38a51e0598c789d22149e645b7": "97e4e1170634c800343302bb6bd4a863",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c8/976bda4a589668454196fdb7269680be2e4334": "9e291513fa22f30e2d0ee9e5e612acac",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/45/c261b8d35d363db2803e792ae6ba2ee43aaaf3": "fd09a3f5e72641eaeb3d4bc1d33e0e50",
".git/objects/73/81f1bebd9926ea28b24d735eba0b993d1d5cb8": "158b4728f393d60dfc726e76991430b9",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7b/f8d2ef62ff8b4c985d2ba9f95fe109900237c8": "8003abadc11ff5a41909282b8d315e9c",
".git/objects/86/e47726bb42bdf7b15eb57e81ced2def6412614": "d70015ed9f914fc15a6168acd3de6c7a",
".git/objects/44/a63311278657b3edc6071a22e66164c5a7b139": "47baed2f668f67968214a5d76d83ae84",
".git/objects/6b/775a51f068ce5bdb93f8cdf603ddaa2bba5324": "7e39d51511dbf7cc05faf2344fa93f0e",
".git/objects/09/954c5bfe05bb98cc03f1b94510b0427c99dae6": "f8d5f682dad6ec44fce1e9f7a5775c13",
".git/objects/98/af2b1748d7fb824164ba6f154b16fb6bd4b65d": "e35f641293b7b2f8410a8c3f2cfc3073",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/97/da8bfb11c2d69f2d3c2b55ab2e409b87031a11": "e6ebd8d97c3638d3e3c44fd2cf80f3cb",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/da36c9b184b2a7878e5f20e4688dcb28438ba1": "7f385a430bc886ffb3b6492de5d0339e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/a087cd156ba45bce3533c14a190faf213bc52a": "461e2e50a14360c5465ef24e2d1c2a64",
".git/objects/a0/7055df7b87f1d228e195a24511c1db74f0e736": "9644999336e1762b91412d02d3310635",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/8f4066c06e1e203cfa2654951d7e131741e00f": "34bb6363f9e84aee061d0b63732169e4",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/a6/79cc694c1f578255e02c18af31cf1f62650d8b": "87a5a079e0fb8d5d554b05ef2a01dd68",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/9f46e0d845f08d05183dc29eaade6dad36fd8a": "ac56d9aa4205d37cda8cbc7a17614f3f",
".git/objects/e6/f3e48b687c1cb7e984ffd14e5f3558d1a5a438": "b399122f0812753b19b437910a2bf7ee",
".git/objects/f0/bd59588f551324bdc1f6bf56eb1aec70dd8af8": "5ed8e2929dd1079b99224f31222b4b2c",
".git/objects/fa/7e79553a495917d24b6271474252b35da90d4c": "d3e7c438c5e7b3c0f8bcf55169054317",
".git/objects/f1/6237742c82b8aacbe2ca668ba1bb9e9b40fd59": "7ffd51126ca3a290dd52879642845abc",
".git/objects/f8/064849020c7c19d3b11f8cead12b2b3acc16e4": "57d50d2cb187669135d96ede8c4a5bef",
".git/objects/ce/30a87fd18a5f5fae2b4717d1f4f1ab10e8e480": "ef0730ef8ba2cd206848a6ccca4a6c55",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/1b/8363e843b2e3b736cd25be8a2e7f891d66ff5a": "e72499720071de7d095e2a1c7f16d69b",
".git/objects/4a/80325892da730a5ad68685be6d1fd8a8927ad6": "901e180579918a4f53ceed653f211b94",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/1d/d71c49ee83ca91b9e10887ba3de5f53c9b4691": "41e5819d37941657674f28959e4f9aa9",
".git/objects/40/97191214d16f0ce40981a00e182ce6a31a307a": "ae4d4dcb778252741b38af731cde473f",
".git/objects/2b/c7f156baa6f93756d9e354552aa49b595446dd": "d0090acd9570a49ae3d1a4b6372e416f",
".git/objects/7f/13f6f33f0418a62bd3f07f257091ce3719585b": "5893fc1645b8b67fbde04ef52afd84ee",
".git/objects/8e/dbe248944653464f8abdf05242301773c683d5": "29ef9965b9125e9bef8e6d62952e10f0",
".git/objects/25/83a47c15c8e04118653f06020ae0a3e0134d87": "6765a8a5c0fd4b13782b8f3dd8d8fcba",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e0f32fca91b87fbc9b24eab4ca65d1b0",
".git/logs/refs/heads/main": "fe67b0938ad52a344d0e50969d008ebb",
".git/logs/refs/remotes/origin/main": "f0f0c2d920e2106e218b41edc4603222",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "d66abe539f5f3e97bc4f36b84676b8cd",
".git/refs/remotes/origin/main": "d66abe539f5f3e97bc4f36b84676b8cd",
".git/index": "6ed1b6d0736cbc08567a46fd92a0b813",
".git/COMMIT_EDITMSG": "8c8d9dab9769aea8c014d89c1ad68d5e",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/sourcetreeconfig": "4fc9aedbd50d02cd56612118cb50314b",
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
