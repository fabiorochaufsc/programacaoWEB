/*self.addEventListener("fetch", function(event) {

	if (event.request.url.includes("bulma.css")) {
		event.respondWith( new Response(".is-success {background: green}",{ headers: { "Content-Type": "text/css" }}));
	}
	
	if (event.request.url.includes("/img/imagem2.png")) {
		event.respondWith(fetch("/img/imagem2-invertida.png"));
	}
	
});
*/

/*
self.addEventListener("fetch", function(event) {
	event.respondWith(
		fetch(event.request).catch(function() {
			return new Response(
				"Welcome to the Gotham Imperial Hotel.\n"+
				"There seems to be a problem with your connection.\n"+
				"We look forward to telling you about our hotel as soon as you go online."
				);
			})
		);
});
*/
