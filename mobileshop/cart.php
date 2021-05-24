<?php
//include header.php file
include('header.php')
?>


<?php
//include Cart item if cart is not empty
count($product->getData('cart')) ? include('templates/_cart.php') : include('./templates/notfound/_cart_notfound.php');
?>


<?php
//include whislists.php file
include('templates/_wishlist.php');
?>

<?php
//include new-phones.php file
include('templates/_top-sales.php');
?>

<?php
//include footer.php file
include('footer.php')
?>

