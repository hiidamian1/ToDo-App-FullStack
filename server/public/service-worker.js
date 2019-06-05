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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/precache-manifest.36610f89713801d227b063aaecc4c668.js"
);

workbox.core.setCacheNameDetails({prefix: "client"});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/index.html");

workbox.routing.registerRoute("/api/todos/", workbox.strategies.networkFirst({ "cacheName":"api-cache","networkTimeoutSeconds":20, plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]}), new workbox.backgroundSync.Plugin("failedRequestQueue", {"maxRetentionTime":1440})] }), 'GET');
workbox.routing.registerRoute("/api/todos/", workbox.strategies.networkOnly({ plugins: [new workbox.backgroundSync.Plugin("failedAddQueue", {"maxRetentionTime":1440})] }), 'POST');
workbox.routing.registerRoute("/api/users/authenticate", workbox.strategies.networkFirst({ "cacheName":"users-cache","networkTimeoutSeconds":20, plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
