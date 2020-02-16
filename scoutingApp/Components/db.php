<?php
  $host = 'localhost';
  $user = 'root';
  $pass = '';
  $db = 'santafe';

  $con = mysqli_connect($host, $user, $pass, $db);
  if(!$con){
    die('cant connect to database');
    exit();
  }
  else {
    echo "<p>exito</p>";
  }
?>
