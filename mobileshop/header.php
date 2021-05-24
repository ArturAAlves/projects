<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile Store</title>

    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">

    <!-- Owl-carousel CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css" integrity="sha256-kksNxjDRxd/5+jGurZUJd1sdR2v+ClrCl3svESBaJqw=" crossorigin="anonymous" />

    <!-- font awesome icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" integrity="sha256-h20CPZ0QyXlBuAw7A+KluUYx/3pK+c7lYEpqLTlxjYQ=" crossorigin="anonymous" />

    <!-- Custom CSS file -->
    <link rel="stylesheet" href="./main.css">

    <?php
    echo "in header";
    ob_start();
    //require funtions.php
    require('./functions.php');

    ?>
</head>

<body>
    <?php echo "hello header" ?>
    <!-- Start #header -->
    <header id="header">
        <div class="strip px-4 py-2 text-right">
            <div class="font-rale font-size-14 login ">
                <a href="$" class="px-3  border-left color-primary">Login</a>
                <a href="http://localhost/shop/php/cart.php" class="px-3 border-right border-left color-primary">Wishlist ( <?php echo  count($product->getData('wishlist')); ?> ) </a>
            </div>
        </div>
        <!-- Primary Navigation -->
        <nav class="navbar navbar-expand-lg navbar-dark color-secondary-bg font-size-14">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Mobile Store</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav m-auto font-rubik ">
                        <li class="nav-item ">
                            <a class="nav-link " href="http://localhost/shop/php/index.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Category</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Blog</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Coming Soon</a>
                        </li>
                    </ul>
                    <form action="#" class="font-size-14 font-raleway cart">
                        <a href="http://localhost/shop/php/cart.php#" class="py-2 rounded-pill color-primary-bg">
                            <span class="font-size-16 px-2 text-white"><i class="fas fa-shopping-cart"></i></span>
                            <span class="px-3 py-2 rounded-pill text-dark bg-light"><?php echo  count($product->getData('cart')); ?></span>
                        </a>
                    </form>
                </div>
            </div>
        </nav>
        <!-- Primary Navigation -->
    </header>
    <!-- End #header -->

    <!-- Start #main -->
    <main class="main">