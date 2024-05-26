/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "a6c10ed0a868530f6bac483f52ea88b5"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "api/index.html",
    "revision": "0afee51476f6664a6927709337e3723e"
  },
  {
    "url": "assets/css/0.styles.17939be5.css",
    "revision": "92099a85ba6f81f1cc9920e36510e64d"
  },
  {
    "url": "assets/img/Relation.235c8aaa.svg",
    "revision": "235c8aaa4816a3294299154ff94df419"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ffdd1b19.js",
    "revision": "6f27c3532be60e76bca8e5465568abd1"
  },
  {
    "url": "assets/js/11.00b6eec7.js",
    "revision": "cd6fce83d58f50592245b8edb4991be6"
  },
  {
    "url": "assets/js/12.53e00e5e.js",
    "revision": "e3a4cda986f4b98c4cffd653dc59b69a"
  },
  {
    "url": "assets/js/13.ea3c4f6c.js",
    "revision": "ff602871a9dd9eac5035869fcaa21901"
  },
  {
    "url": "assets/js/14.b620f02c.js",
    "revision": "c47e00178e234471f42ccc2546285565"
  },
  {
    "url": "assets/js/15.a86a8d01.js",
    "revision": "ec17f013afab59fb5dc48e426ca6c2b6"
  },
  {
    "url": "assets/js/16.10a61e22.js",
    "revision": "4083d64086029d17ce6f6657c8955fd7"
  },
  {
    "url": "assets/js/17.9e3412fc.js",
    "revision": "01afaac6d4681b83a07b0d748c9680e0"
  },
  {
    "url": "assets/js/18.c5912e60.js",
    "revision": "e7ef8c97c389f575f69b227209aea948"
  },
  {
    "url": "assets/js/19.b40a0b06.js",
    "revision": "496995ad439be7b50d3e324b51099465"
  },
  {
    "url": "assets/js/2.cebabf1d.js",
    "revision": "f57e9f1755d4ab96c82e5556eb5a84f9"
  },
  {
    "url": "assets/js/20.069e7006.js",
    "revision": "8d61fb051fc9ff79ae085e6730223551"
  },
  {
    "url": "assets/js/21.0f5c3d05.js",
    "revision": "75cf1dea9ac8c5fc924ddf7090a0096f"
  },
  {
    "url": "assets/js/22.06f468d5.js",
    "revision": "cbf4772004e3b2749c99a9938654b95e"
  },
  {
    "url": "assets/js/23.58dc232a.js",
    "revision": "8dbd7b466f2b8d0714f4dae56564f6cd"
  },
  {
    "url": "assets/js/24.542a26f8.js",
    "revision": "a2d12407b19c61a374e5b8e2f6dae3be"
  },
  {
    "url": "assets/js/25.e6e9d3c5.js",
    "revision": "7ce1d6ecbd740b82928fc66b034470a2"
  },
  {
    "url": "assets/js/27.93013a3f.js",
    "revision": "dc6e9b575909a753f0d4c53e52c95223"
  },
  {
    "url": "assets/js/3.f6140648.js",
    "revision": "cc362cb24068987426e9655bdb12b30a"
  },
  {
    "url": "assets/js/4.50554d69.js",
    "revision": "20f92a95ac69fb7c48e63b470c35d475"
  },
  {
    "url": "assets/js/5.33f10a2a.js",
    "revision": "901a99cdf3abb60d02f05b13e45f36b2"
  },
  {
    "url": "assets/js/6.10931e33.js",
    "revision": "5666693a1497354d7117ebbb34cc592d"
  },
  {
    "url": "assets/js/7.b865a5f1.js",
    "revision": "bb0c8e37415a02abe60360941ab6ec31"
  },
  {
    "url": "assets/js/8.cce4fd62.js",
    "revision": "08bfe2392b3540f002e470b59276c162"
  },
  {
    "url": "assets/js/9.6d73ecd3.js",
    "revision": "e5c2ac5dcd8c3022a731095ecd85a5b1"
  },
  {
    "url": "assets/js/app.0fd3c47f.js",
    "revision": "6adaedc5961bf37f8f2e3c447d858be3"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ad65a2d7bb028850949f501eb2189daa"
  },
  {
    "url": "design/index.html",
    "revision": "2bc3ff1b705848c2c8f9f47aeef0dc19"
  },
  {
    "url": "index.html",
    "revision": "e2a4f9c791e13a67ba3fccab18286a2b"
  },
  {
    "url": "intro/index.html",
    "revision": "802b4c59437b8add355ed11096a5af98"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "b5932adb6768153a1b6abc01f97409ff"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "888a7353187b69facf679b51660a2654"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "00939de5ac61566c84880f85597d5b5a"
  },
  {
    "url": "software/index.html",
    "revision": "cab1828435abe6a90acc862d28edee89"
  },
  {
    "url": "test/index.html",
    "revision": "16703f17a442bd19720475369f2caccb"
  },
  {
    "url": "use cases/index.html",
    "revision": "4a522f8248ca782d107c8490edddb357"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
