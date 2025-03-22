var browserAPI = typeof browser !== "undefined" ? browser : chrome;

browserAPI.runtime.onInstalled.addListener(function() {
  console.log('URL Manager extension installed');
});