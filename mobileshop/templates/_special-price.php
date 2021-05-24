<?php
$brand = array_map(function ($prod) {
    return $prod['item_brand'];
}, $product_shuffle);
$unique = array_unique($brand);
sort($unique);
shuffle($product_shuffle);

//request method post
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['special_price_submit'])) {
        //call method addToCart
        $Cart->addTocart($_POST['user_id'], $_POST['item_id']);
    }
}

$in_cart = $Cart->getCartId($product->getData('cart'));

?>

<!-- Special Price -->
<section id="special-price ">
    <div class="container">
        <h4 class="font-rubik font-size-20">Special Price</h4>
        <div id="filters" class="button-group text-right ">
            <button class="btn is-checked " data-filter="*">All Brands</button>
            <?php foreach ($unique as $prod) { ?>
                <button class="btn " data-filter=".<?php echo $prod ?? "Samsung" ?>"><?php echo $prod ?? "Samsung" ?></button>

            <?php } ?>
        </div>
        <div class="grid">
            <?php array_map(function ($item) use ($in_cart) { ?>
                <div class="grid-item <?php echo $item['item_brand'] ?? "Samsung" ?> border ">
                    <div class="item py-2" style="width: 200px;">
                        <div class="product font-rale">
                            <a href="product.php?item_id=<?php echo  $item['item_id'] ?>"><img class="img-tumb" src="<?php echo $item['item_image'] ?? "/assets/products/1.png" ?>" alt="product1"></a>
                            <div class="text-center">
                                <h6><?php echo $item['item_name'] ?? "/assets/products/1.png" ?></h6>
                                <div class="rating text-warning font-size-12">
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="fas fa-star"></i></span>
                                    <span><i class="far fa-star"></i></span>
                                </div>
                                <div class="price py-2">
                                    <span><?php echo $item['item_price'] ?? "0" ?></span>
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
                </div>

            <?php }, $product_shuffle) ?>
        </div>
</section>
<!-- Special Price -->