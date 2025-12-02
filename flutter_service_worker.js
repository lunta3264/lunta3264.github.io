'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "0f1f070b681ad09cff2c435894452630",
"version.json": "bd341ba74d38c530da636604a427deda",
"index.html": "7d52c6b929f8db527b5f732e603319d3",
"/": "7d52c6b929f8db527b5f732e603319d3",
"main.dart.js": "10b53aae99378a9d9f0f8d3e8379127c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"favicon.png": "9e5bb13da906f3cbca36d7f209e90444",
"icons/Icon-192.png": "ca0ee7d98a02dcaca0b491e8ec21dc70",
"icons/Icon-maskable-192.png": "ca0ee7d98a02dcaca0b491e8ec21dc70",
"icons/Icon-maskable-512.png": "363c104cbcb7bd208670f804c6df8a49",
"icons/Icon-512.png": "363c104cbcb7bd208670f804c6df8a49",
"manifest.json": "875d681f529adca30a31aa66728a3c8c",
"assets/logos/skills/triton.png": "1da4c0868d6950dc1d9399b32789396c",
"assets/logos/skills/plotly.png": "c84c17b2367e08015f15debc4bbe42de",
"assets/logos/skills/mlflow.png": "2f0e00eda39f810fbd1a5830997066cd",
"assets/logos/skills/dvc.png": "d9f10abeab6e968f07ec59928493261d",
"assets/logos/skills/freertos.png": "0317c7e1e87819715e26485b623d8d03",
"assets/logos/skills/weightsandbiases.png": "dfff27f1fbea39f844a8f6518dd1644f",
"assets/logos/skills/tensorrt.png": "edf44e4b1f81f8c44d2292d6b8fe8178",
"assets/logos/skills/pandas.png": "8666cb6b5b18e3a579ed4c0120deed62",
"assets/logos/skills/cpp.png": "ea387978b8f3d867c9590deeb04a69a7",
"assets/logos/skills/raspberry-pi.png": "892206ce1d29263172bd7150cef0c701",
"assets/logos/skills/jupyter.png": "c58f00e4740daa7f2d479a422a8f97bd",
"assets/logos/skills/rust.png": "69c905005a9ecf40dd437cdc5fc90cfc",
"assets/logos/skills/matlab.png": "ad36fa46c8602b226ce5fa55a026dae7",
"assets/logos/skills/matplotlib.png": "e9570e995d953591d10d5a8c1713555b",
"assets/logos/skills/cuda.png": "7d403c162e56ce01c41067b0f1eb93d9",
"assets/logos/skills/numpy.png": "f5ba12f40e6dbf0aa7414310142c5f89",
"assets/logos/skills/seaborn.png": "3a7a568d16bf3a249103d988686bfd0d",
"assets/logos/skills/wandb.svg": "7696e24cd274ccc2a70056c723f221ca",
"assets/logos/skills/platformio.png": "6d7c38a7e58ed710b96b7a6d2f3d18fe",
"assets/logos/skills/go.png": "ec80d32c887689e79ccb7731b38a34d6",
"assets/logos/skills/scipy.png": "d6c31108bc7ea7c981b22c363b030350",
"assets/logos/skills/arduino.png": "18c2b0740bff986e3d847bdd6bd84a81",
"assets/logos/skills/c.png": "6b5f5a7bde450a49b539d9673488143d",
"assets/logos/skills/onnx.png": "80c338c18e9b7d41695ea9b676424a36",
"assets/logos/skills/gradio.png": "9b4a86609850b01c798d760cf210b2a6",
"assets/logos/frameworks/cisco.png": "a249437b3c4ddd096afb4086b1e6e4be",
"assets/logos/frameworks/flask.png": "6525462876fc6eda484db9abb4341abe",
"assets/logos/frameworks/tensorflow.png": "9a5f9e2870928959999de00cc8f68f53",
"assets/logos/frameworks/docker.png": "0ee01c3cde32b11344b93f7f1ab0ced2",
"assets/logos/frameworks/kubernetes.png": "efee5b63c711b904ccd92124ae80dba5",
"assets/logos/frameworks/opencv.png": "56f6a20db73437e939d7108e68bfbe9a",
"assets/logos/frameworks/flutter.png": "2e4d11817910cdafa63bd52342eeb753",
"assets/logos/frameworks/hugging-face.png": "e0d8fc665298470e5ee271a6e163594f",
"assets/logos/frameworks/firebase.png": "0797a2f8af536ae9ff2a0317fdfdc1c4",
"assets/logos/frameworks/mujoco.png": "fdaeb4594d4d669f08b07d33bd6bf5ec",
"assets/logos/frameworks/langchain.png": "cc556d73fed5a8fb0bbb64c4022169ec",
"assets/logos/frameworks/django.png": "e273c027ec02caeaea5a0124550cc791",
"assets/logos/frameworks/scikit-learn.png": "e522487990a0491ae2ec95233c6f3d42",
"assets/logos/frameworks/ray.png": "355f5ca3832844ebd2353cbd5a447e89",
"assets/logos/frameworks/pytorch.png": "f6ea11f0de44b01e2c94649bc0212e4a",
"assets/logos/frameworks/dart.png": "81845e596ea48076768f561a7ad08487",
"assets/logos/frameworks/jax.png": "c639204fc77cb0c7d2701ebd502d75f5",
"assets/logos/frameworks/fastapi.png": "be20696cf451d988a33e7a5580777b7f",
"assets/NOTICES": "0dc4b160f8e7b995f6e27a9c97ff6d45",
"assets/FontManifest.json": "c75f7af11fb9919e042ad2ee704db319",
"assets/AssetManifest.bin.json": "f365227e3197579ec7024764bf575b4c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Regular-400.otf": "3ad132f7bad666e7ea9f0e08412f50a2",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Brands-Regular-400.otf": "d832ab59c745a91fb729970acb10f284",
"assets/packages/font_awesome_flutter/lib/fonts/Font-Awesome-7-Free-Solid-900.otf": "3f685fccafd00a3fa9a259e90e17a091",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "726f381a87be5e7deee9da3acbc4ca1c",
"assets/fonts/MaterialIcons-Regular.otf": "cf9a46cc0ca18ee83acb2b461c1f5dbd",
"assets/assets/images/research/azurite-spectroscopy.png": "4cba0f3a2bf2dff66687d9b463a12be7",
"assets/assets/images/research/magnetic-music.png": "bb8b15bae3240f405d0c1d1d5fffbdc4",
"assets/assets/images/research/magnetic-assist.gif": "54fe6adc93773aaf517fd40014b3b13f",
"assets/assets/images/organizations/vekua.png": "b141d4b8f1857779ee054ae9825d847a",
"assets/assets/images/organizations/scsa.png": "749d92b2f019b93d6325b8c687377a35",
"assets/assets/images/organizations/gaid.png": "7acfbee998716c3576351081e2b05e55",
"assets/assets/images/ioai.png": "090be674f354bea48f178b77a6618f7a",
"assets/assets/images/projects/first-global.png": "64e793f03de147f6d7ac9473b77e1985",
"assets/assets/images/projects/scsa-patch.png": "f787f80435e808fcddac46d4ac44a8b6",
"assets/assets/images/projects/gaid.png": "0978327f101f700b98e3ba94b790adbc",
"assets/assets/images/steam_olympiad.png": "8288bd4df110bd912a440c5a636dbca0",
"assets/assets/images/logos/organizations/entrepreneur.jpg": "e52705a9ae82a6a50c02235288a9d7d7",
"assets/assets/images/backgrounds/blog.png": "cf616757142f30aa615be6829b13089b",
"assets/assets/images/montessori.jpg": "541afc43052f4951956d870772a5dd5d",
"assets/assets/images/logo.jpg": "b76ff9ca6fda442f8f9e68feec9692b0",
"assets/assets/images/iypt.jpg": "16254fc555dd10f8c8bec0ab94991263",
"assets/assets/images/first_global_text.png": "5138aa97dbd0a10d55ffccf70849dd3b",
"assets/assets/Engineering-Notebook.pdf": "d3bab24a75f82e1334a7314e3c0b65a0",
"assets/assets/iynt-2024.pdf": "b7b3e954502f9ff43aa7587edc3687fb",
"assets/assets/cv.pdf": "6dd5eba9b649ad3c83301e828c03dd70",
"assets/assets/ichto-2025.pdf": "079935208bfa4c82d80f9d05cea08a5f",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
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
