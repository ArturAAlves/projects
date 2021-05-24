   <?php
   //require Mysql Connection

   require('./database/DBcontroller.php');


   require('./database/product.php');


   //require cart Class
   require('./database/cart.php');



   echo 'functions step 1';
   //Db controller Object
   $db = new DBcontroller();

   echo 'functions step 2';
   // Product Object
   // $product = new Product($db);
   // echo 'functions step 3';
   // echo "$product";
   // $product_shuffle = $product->getData();
   // echo 'functions step 4';


   //cart object
   $Cart = new Cart($db);
