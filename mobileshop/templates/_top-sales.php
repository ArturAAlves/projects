<?php
$product_shuffle = $product->getData();
shuffle($product_shuffle);

//request method post
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['top_sale_submit'])) {
        //call method addToCart
        $Cart->addTocart($_POST['user_id'], $_POST['item_id']);
    }
}

$in_cart = $Cart->getCartId($product->getData('cart'));

?>

<!-- Top Sale -->
<section id="top-sale">
    <div class="container py-5">
        <h4 class="font-rubik font-size-20">Top Sale</h4>
        <hr>
        <!-- Owl-carousel -->
        <div class="owl-carousel owl-theme">
            <?php foreach ($product_shuffle as $item) { ?>
                <div class="item py-2">
                    <div class="product font-raleway">
                        <a href=" product.php?item_id=<?php echo  $item['item_id'] ?>"><img class="img-tumb" src="<?php echo $item['item_image'] ?? "/assets/products/1.png" ?>" alt="product1"></a>
                        <div class="text-center">
                            <h6><?php echo $item['item_name'] ?? "unknown"; ?></h6>
                            <div class="rating text-warning font-size-12">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="far fa-star"></i></span>
                            </div>
                            <div class="price py-2">
                                <span><?php echo $item['item_price'] ?? "0"; ?></span>
                            </div>
                            <form action="" method="POST">
                                <input type="hidden" name="item_id" value=" <?php echo $item['item_id']; ?>">
                                <input type="hidden" name="user_id" value=" <?php echo  '1';  ?>">

                                <?php
                                if (in_array($item['item_id'], $in_cart ?? [])) {
                                    echo '<button type="submit" disabled class="btn btn-success font-size-12">In the Cart</button>';
                                } else {
                                    echo '<button type="submit" name="top_sale_submit" class="btn btn-warning font-size-12">Add to Cart</button>';
                                }
                                ?>
                            </form>

                        </div>
                    </div>
                </div>
            <?php } ?>
        </div>
        <!-- Owl-carousel -->
    </div>

</section>
<!-- Top Sale -->