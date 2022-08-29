<?php

  $descricao= $_GET['descricao'];
  $numero   = $_GET['numero'];

  $myfile = fopen("etiquetas.txt", "a+");
  fputs($myfile,$numero.'  '.$descricao."\r\n");
  fclose($myfile);


