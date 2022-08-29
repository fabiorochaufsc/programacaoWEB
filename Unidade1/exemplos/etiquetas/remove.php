<?php

  $numero   = $_GET['numero'];
 $x=0;

  $myfile = fopen("etiquetas.txt", "r") or die("Unable to open file!");
	while(!feof($myfile)) {
  		$linha = fgets($myfile);
                sscanf($linha,"%d:%s", $n, $d);

                if ($n!=$numero)
		{
		  
			$vet[$x]=$linha;
			$x = $x+1;
		}
else echo "encontrou o elemento para apagar";
	}
	fclose($myfile);
        echo "terminou de ler";
  $myfile = fopen("etiquetas.txt", "w") or die("Unable to open file!");
  $cont=0;
  while ($cont < $x)
  {
     fputs($myfile,$vet[$cont]);
     $cont = $cont + 1;
  }
  fclose($myfile);


