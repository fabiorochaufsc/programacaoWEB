
// Modulo de interface grafica
 
function O(msg)
{
	return document.getElementById(msg);
}


function mostra (m)
{
	const todos = document.getElementsByClassName('tela');
	for (let i = 0; i < todos.length; i++) {
  		todos[i].style.display="none";	
	}

	O(m).style.display="block";
}


