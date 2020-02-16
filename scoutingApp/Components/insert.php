<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>

  </body>
  <script type="text/javascript">
    console.log('running!');
  </script>
</html>

<?php
  if(isset($_SERVER["CONTENT_TYPE"])){
    $contentType = trim($_SERVER["CONTENT_TYPE"]);
  }
  if($contentType === "text/csv"){
    $content = trim(file_get_contents("php://input"));
    echo $content;
  }

  include "db.php";
  global $con;

  $sql = "insert into raw_match_data (raw_input) values('hello')";
  $query = mysqli_query($con, $sql);
  echo mysqli_error($con);

  if($query){
    echo 'data inserted succesfully';
  }
?>
