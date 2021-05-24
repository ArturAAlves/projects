<?php
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['wishlist-to-cart'])) {
        //call method addToCart
        $teste =  $Cart->addToWish($_POST['item_id'], 'cart', 'wishlist');
        echo $teste;
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        if (isset($_POST['delete-wish-list'])) {
            $deletedrecord = $Cart->deleteWish($_POST['item_id']);
        }
    }
}

?>

<!-- Shopping Cart -->
<section id="cart" class="py-5">
    <div class="container-fluid w-75">
        <h5 class="font-baloo font-size-20 ">Wishlist Cart</h5>
        <!-- Shoppping Cart Items -->
        <div class="row">
            <!-- cart items -->
            <div class="col-lg-9">
                <?php
                foreach ($product->getData('wishlist') as $item) :
                    $cart = $product->getProduct($item['item_id']);
                    // print_r($cart);
                    $subTotal[] = array_map(function ($item) {
                ?>
                        <!-- cart item -->
                        <div class="row border-top py-3 mt-3">
                            <div class="col-sm-2">
                                <img src="<?php echo $item['item_image']; ?>" alt="" class="img-fluid" style="width: 120px;">
                            </div>
                            <div class="col-sm-8">
                                <h5 class="font-baloo font-size-20"><?php echo $item['item_name']; ?></h5>
                                <small class="font-size-12">By <?php echo $item['item_brand'] ?? 'Unown'; ?></small>
                                <!-- rating -->
                                <div class="d-flex">
                                    <div class="rating text-warning font-size-12">
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="fas fa-star"></i></span>
                                        <span><i class="far fa-star"></i></span>
                                    </div>
                                    <a href="#" class="px-2 font-raleway font-size-14 color-secondary">155
                                        Ratings</a>
                                </div>
                                <!-- rating -->


                                <!-- product qty -->
                                <div class="qty d-flex font-raleway font-size-16 mt-3">
                                    <div class="d-flex ">
                                        <form method="post">
                                            <input type="hidden" name="item_id" value="<?php echo $item['item_id'] ?? 0; ?>">
                                            <button type="submit" name="delete-wish-list" class="btn border-right font-size-16 color-red text-danger pl-0">Delete</button>

                                        </form>
                                        <form method="post">
                                            <input type="hidden" value="<?php echo $item['item_id'] ?? 0; ?>" name="item_id">
                                            <button type="submit" name="wishlist-to-cart" class="btn  font-size-16 color-red  text-danger px-4">Add To Cart</button>
                                        </form>
                                    </div>
                                </div>
                                <!-- product qty -->
                            </div>
                            <div class="col-sm-2 text-right">
                                <div class="font-size-20 text-danger font-baloo">
                                    $<span class="product_price" data-id="<?php echo $item['item_id'] ?? '0'; ?>"><?php echo $item['item_price'] ?? 0; ?></span>
                                </div>
                            </div>
                        </div>
                        <!-- cart item -->
                <?php
                        return $item['item_price'];
                    }, $cart);

                endforeach;

                ?>
                <!-- cart items -->
            </div>
            <div class="col-lg-3 ">

            </div>
        </div>
        <!-- Shoppping Cart Items -->
    </div>
</section>
<!--Shopping Cart -->