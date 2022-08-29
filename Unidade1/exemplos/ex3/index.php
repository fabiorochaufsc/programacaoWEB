<?php

if (empty($_GET)){

?>
<form  name="search" method="get" >
	<select name="category">
		<option value="filme">Filme</option>
		<option value="sport">Esporte</option>
		<option value="musica">Musica</option>
	</select></br>
	<input type="submit" value="search"/>
</form>
<?php
}else {
	echo "Resultados da pesquisa";
}
