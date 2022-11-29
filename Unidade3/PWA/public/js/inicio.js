

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/serviceworker4.js")
	.then(function(registration) {
		console.log("Service Worker4 registered with scope:", registration.scope);
	}).catch(function(err) {
		console.log("Service worker registration failed:", err);
	});
}
