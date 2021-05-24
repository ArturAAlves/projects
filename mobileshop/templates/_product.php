<?php
echo "in product.php";
$item_id = $_GET['item_id'];
//request method post

if ($_SERVER['REQUEST_METHOD'] == "POST") {
    if (isset($_POST['add-to-cart'])) {
        //call method addToCart
        $Cart->addToCartProduct($_POST['user_id'], $_POST['item_id']);
    }
}




foreach ($product->getData() as $item) :
    if ($item['item_id'] == $item_id) :

        $product_shuffle = $product->getData();
        shuffle($product_shuffle);


?>
        <!-- Product -->
        <section id="product" class="py-3">
            <div class="container">
                <div class="row">
                    <div class=" col-sm-6">
                        <img src="<?php echo $item['item_image' ?? ""]  ?>" alt="product" class="img-prod">
                        <div class="form-row py4 font-size-16 font-baloo">
                            <div class="col">
                                <button type="submit" class="btn btn-danger form-control font-size-14">Proceed to
                                    Buy</button>
                            </div>
                            <div class="col">


                                <form action="" method="POST">
                                    <input type="hidden" name="item_id" value=" <?php echo $item['item_id']; ?>">
                                    <input type="hidden" name="user_id" value=" <?php echo  '1';  ?>">

                                    <?php
                                    if (in_array($item['item_id'], $in_cart ?? [])) {
                                        echo '<button type="submit" disabled class="btn btn-success font-size-12 form-control">In the Cart</button>';
                                    } else {
                                        echo ' <button type="submit" name="add-to-cart"class="btn btn-warning form-control font-size-14">Add to
                                    Cart</button>';
                                    }
                                    ?>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class=" col-sm-6  py-5">
                        <h5 class="font-baloo font font-size-20"><?php echo $item['item_name'] ?? "Unknown" ?></h5>
                        <p>By <?php echo $item['item_brand' ?? ""]  ?></p>
                        <div class="d-flex">
                            <div class="rating text-warning font-size-12">
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="fas fa-star"></i></span>
                                <span><i class="far fa-star"></i></span>
                            </div>
                            <a href="#" class="px-2 font-raleway font-size-14 color-secondary"> 1.322 ratings | 100 +
                                answered questions</a>
                        </div>
                        <hr class="m-0">
                        <!-- Product Price -->
                        <table class="my-3">
                            <tr class="font-raleway font-size-14">
                                <td class="pr-3">Market Price:</td>
                                <td style="text-decoration: line-through;">$167.00</td>
                            </tr>
                            <tr class="font-raleway font-size-14">
                                <td class="pr-3">Deal Price:</td>
                                <td class="font-size-16 text-danger"><?php echo $item['item_price' ?? ""]  ?><small class="text-black-50">All taxes
                                        included</small></td>
                            </tr>
                            <tr class="font-raleway font-size-14">
                                <td class="pr-3">You save:</td>
                                <td class="font-size-16 text-danger">$20.00 </td>
                            </tr>
                        </table>
                        <!-- Product Price -->
                        <!-- Policty -->
                        <div id="policy">
                            <div class="d-flex">
                                <div class="return text-center mr-5">
                                    <div class="font-size font-size-20 my-2 color-secondary ">
                                        <span class="fas fa-retweet"></span>
                                    </div>
                                    <a href="#" class="font-raleway font-size-12 ">15 Days <br> Return Policy</a>
                                </div>

                                <div class="return text-center mr-5">
                                    <div class="font-size font-size-20 my-2 color-secondary ">
                                        <span class="fas fa-truck"></span>
                                    </div>
                                    <a href="#" class="font-raleway font-size-12 "> Delivery<br> Fast and Secure</a>
                                </div>

                                <div class="return text-center mr-5">
                                    <div class="font-size font-size-20 my-2 color-secondary ">
                                        <span class="fas fa-check"></span>
                                    </div>
                                    <a href="#" class="font-raleway font-size-12 ">15 Days <br> Return Policy</a>
                                </div>
                            </div>
                        </div>
                        <!-- Policty -->
                        <hr class="my-5">
                        <!-- Order Details -->
                        <div class="order-details font-raleway d-flex flex-column text-dark font-size-16 my-3">
                            <small>Delivery by: Dec 02 - Dec 07 </small>
                            <small><i class="fas fa-map-marker-alt color-secondary"></i>&nbsp;&nbsp;Deliver to Customer
                                -
                                45646</small>
                        </div>
                        <!-- Order Details -->
                        <div class="row">
                            <div class="col-6 col-xs-12">
                                <!-- color -->
                                <div class="color my-3">
                                    <div class="d-flex jusify-content-between">
                                        <h6 class="font-baloo font-size-16">Color:</h6>
                                        <div class="mx-3">
                                            <button class="btn font-size-14 p-4 color-yellow-bg rounded-circle"></button>
                                        </div>
                                        <div class="mx-3">
                                            <button class="btn font-size-14 p-4 color-primary-bg rounded-circle"></button>
                                        </div>
                                        <div class="mx-3">
                                            <button class="btn font-size-14 p-4 color-secondary-bg rounded-circle"></button>
                                        </div>
                                    </div>
                                </div>
                                <!-- color -->
                            </div>
                            <div class="col-xl-6 col-l-12">
                                <!-- <div class="qty d-flex">
                                    <h6 class="font-baloo font-size-16 pt-3">Qty:</h6>
                                    <div class=" px-3  d-flex font-raleway font-size-16">
                                        <button class="qty-up border p-2 bg-light"><i class="fas fa-angle-up"></i>
                                        </button>
                                        <input type="text" class="qty-input border mx-0 text-center" style="width: 40px;" disabled value="1" placeholder="1">
                                        <button class="qty-down border ml-0 p-2 bg-light"><i class="fas fa-angle-down"></i>
                                        </button>
                                    </div>
                                </div> -->
                            </div>
                            <!-- size -->
                            <div class="size col">
                                <h6 class="font-baloo font-size-16 pt-3">Size:</h6>
                                <div class="d-flex font-raleway justify-content-between w-75">
                                    <div class="font-rubik border p-2">
                                        <button class="btn p-0 font-size-14">
                                            4GB RAM
                                        </button>
                                    </div>
                                    <div class="font-rubik border p-2">
                                        <button class="btn p-0 font-size-14">
                                            6GB RAM
                                        </button>
                                    </div>
                                    <div class="font-rubik border p-2">
                                        <button class="btn p-0 font-size-14">
                                            8GB RAM
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                        </div>
                    </div>
                    <div class="col-12 my-5">
                        <h6 class="font-rubik">Product Description</h6>
                        <hr>
                        <p class="font-raleway font-size-14">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur maxime quae qui
                            veniam numquam ea. Perspiciatis facilis dicta laudantium corporis aliquam expedita totam vel
                            quod ipsam, ullam eveniet, doloremque mollitia?
                        </p>
                        <p class="font-raleway font-size-14">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur maxime quae qui
                            veniam numquam ea. Perspiciatis facilis dicta laudantium corporis aliquam expedita totam vel
                            quod ipsam, ullam eveniet, doloremque mollitia?
                        </p>
                    </div>

                </div>
            </div>
            </div>
        </section>
        <!-- Product  -->

<?php
    endif;
endforeach;
?>