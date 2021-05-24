<!-- Shopping Cart -->
<section id="cart" class="py-5">
    <div class="container-fluid w-75">
        <h5 class="font-baloo font-size-20 ">Shopping Cart</h5>
        <!-- Shoppping Cart Items -->
        <div class="row">
            <!-- cart items -->
            <div class="col-lg-9">
                <!-- Emtpy Cart  -->
                <div class="row border-top py-3 mt-3">
                    <div class="col-sm-12 text-center">
                        <img src="./assets/blog/empty_cart.png" alt="Empty Cart" class="img-fluid" style="height:200px">
                        <p class="font-baloo font-size-16 text-black-50">Empty Cart</p>
                    </div>
                </div>
                <!-- Emtpy Cart  -->
            </div>
            <div class="col-lg-3 ">
                <!-- cart subtotal -->
                <div class="border  text-center">
                    <div class=" text-success  font-size-14 w-100 border-bottom p-3">
                        <i><span class="fas fa-check pr-2"></span></i><small>Your order is eligible for FREE
                            delivery</small>
                    </div>
                    <div class="p-3 py-5">
                        <p class="font-size-20"> Subtotal ( <?php echo count($product->getData('cart')); ?> : items): $
                            <span class="text-danger" id="deal-price">
                                <?php
                                echo isset($subTotal) ? $Cart->getSum($subTotal) : 0;
                                ?>
                            </span>
                        </p>
                        <button type="submit" class="btn btn-warning font-size-16 m-3">Proceed to
                            Buy</button>
                    </div>
                </div>
                <!-- cart subtotal -->
            </div>
        </div>
        <!-- Shoppping Cart Items -->
    </div>
</section>
<!--Shopping Cart -->