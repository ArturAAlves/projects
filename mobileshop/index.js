$(document).ready(function () {
    //banner owl carosel
    $("#banner-area .owl-carousel").owlCarousel({
        dots: true,
        items: 1
    })

    //Top-Sale owl carosel
    $("#top-sale .owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
        }
    })

    // Isotop
    var $grid = $(".grid").isotope({
        itemSelector: ".grid-item",
        layoutMode: "fitRows"
    })

    //filter items on button click
    $(".button-group").on("click", "button", function () {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    })

    //New Phones owl carosel
    $("#new-phones .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            },
        }
    })

    //Blogs owl carosel
    $("#blogs .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            },
        }
    })

    // product qty section
    let $qty_up = $(".qty .qty-up");
    let $qty_down = $(".qty .qty-down");
    let $deal_price = $("#deal-price");
    // let $input = $(".qty .qty_input");

    // click on qty up button
    $qty_up.click(function (e) {

        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        let $price = $(`.product_price[data-id='${$(this).data("id")}']`);

        // change product price using ajax call
        $.ajax({
            url: "templates/ajax.php", type: 'post', data: { itemid: $(this).data("id") }, success: function (result) {
                let obj = JSON.parse(result);
                let item_price = obj[0]['item_price'];

                if ($input.val() >= 1 && $input.val() <= 9) {
                    $input.val(function (i, oldval) {
                        return ++oldval;
                    });

                    // increase price of the product
                    $price.text(parseInt(item_price * $input.val()).toFixed(2));

                    // set subtotal price
                    let subtotal = parseInt($deal_price.text()) + parseInt(item_price);
                    $deal_price.text(subtotal.toFixed(2));
                }

            }
        }); // closing ajax request
    }); // closing qty up button

    // click on qty down button
    $qty_down.click(function (e) {

        let $input = $(`.qty_input[data-id='${$(this).data("id")}']`);
        let $price = $(`.product_price[data-id='${$(this).data("id")}']`);

        // change product price using ajax call
        $.ajax({
            url: "templates/ajax.php", type: 'post', data: { itemid: $(this).data("id") }, success: function (result) {
                let obj = JSON.parse(result);
                let item_price = obj[0]['item_price'];

                if ($input.val() > 1 && $input.val() <= 10) {
                    $input.val(function (i, oldval) {
                        return --oldval;
                    });


                    // increase price of the product
                    $price.text(parseInt(item_price * $input.val()).toFixed(2));

                    // set subtotal price
                    let subtotal = parseInt($deal_price.text()) - parseInt(item_price);
                    $deal_price.text(subtotal.toFixed(2));
                }

            }
        }); // closing ajax request
    }); // closing qty down button



    //     // product quantity
    //     const inputContainer = document.querySelectorAll(".qty-container")
    //     inputContainer.forEach(container => {
    //         const btnUp = container.querySelectorAll(".qty-up");
    //         const btnDown = container.querySelectorAll(".qty-down");
    //         const inputBox = container.querySelectorAll(".qty-input");

    //         console.log(inputBox.data)

    //         let $deal_price = $("#deal-price");
    //         let counter = 1;
    //         btnUp.forEach(btn => {
    //             btn.addEventListener("click", function () {
    //                 let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
    //                 let $price = $(`.product-price[data-id='${$(this).data("id")}']`);
    //                 // change product price using ajax call
    //                 $.ajax({
    //                     url: "templates/ajax.php", type: 'post', data: { itemid: $(this).data("id") }, success: function (result) {
    //                         let obj = JSON.parse(result);
    //                         let item_price = obj[0]['item_price'];

    //                         if (counter < 10) {
    //                             // increase price of the product
    //                             $price.text(parseInt(item_price * $input.val()).toFixed(2));
    //                             // set subtotal price
    //                             let subtotal = parseInt($deal_price.text()) + parseInt(item_price);
    //                             $deal_price.text(subtotal.toFixed(2));
    //                             counter += 1
    //                             inputBox.forEach(element => {
    //                                 element.value = counter;
    //                             });
    //                         }
    //                     }
    //                 }); // closing ajax request
    //             });


    //         });

    //         btnDown.forEach(btn => {
    //             btn.addEventListener("click", function () {
    //                 let $input = $(`.qty-input[data-id='${$(this).data("id")}']`);
    //                 let $price = $(`.product-price[data-id='${$(this).data("id")}']`);
    //                 // change product price using ajax call
    //                 $.ajax({
    //                     url: "templates/ajax.php", type: 'post', data: { itemid: $(this).data("id") }, success: function (result) {
    //                         let obj = JSON.parse(result);
    //                         let item_price = obj[0]['item_price'];
    //                         if (counter > 1) {
    //                             // increase price of the product
    //                             $price.text(parseInt(item_price * $input.val()).toFixed(2));
    //                             // set subtotal price
    //                             let subtotal = parseInt($deal_price.text()) - parseInt(item_price);
    //                             $deal_price.text(subtotal.toFixed(2));
    //                             counter -= 1
    //                             inputBox.forEach(element => {
    //                                 element.value = counter;
    //                             });
    //                         }
    //                     }
    //                 }); // closing ajax request
    //             });
    //         });
    //     })
})
