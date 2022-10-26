	function carrega () {

		var dado = document.getElementById('nome').value;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		
		};
		xhttp.open("GET", "http://localhost:3000/FCM?id="+dado, true);
		xhttp.send();
	}


	//document.getElementById("teste").addEventListener ('click',function(){
//
//	},false)

