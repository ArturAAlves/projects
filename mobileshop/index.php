<?php

ob_start();
//Header file
include('./header.php');
echo 'oppening header';
?>

<?php
//Banner file
include('./templates/_banner.php');
echo 'in banner';
?>

<?php
//Top-Sales file
include('.templates/_top-sales.php');


?>

<?php
//Special Price file
include('./templates/_special-price.php');

?>

<?php
//Adds adds file
include('./templates/_adds.php');

?>

<?php
//New Phpnes new PHones file
include('./templates/_new-phones.php');

?>

<?php
//Blogs blogs file
include('./templates/_blogs.php');

?>

<?php
//include footer file
include('./footer.php');

?>