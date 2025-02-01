// background.js
const scamBlacklist = [
  "*://solanascam.com/*",
  "*://fakephantomwallet.io/*",
  "*://drainer-site.xyz/*",
  "*://coinpaper.com/*",
  "*://dydxcc.com/*"
];

function blockScamRequests(details) {
  return { redirectUrl: browser.runtime.getURL("blocked.html") };
}

browser.webRequest.onBeforeRequest.addListener(
  blockScamRequests,
  { urls: scamBlacklist },
  ["blocking"]
);