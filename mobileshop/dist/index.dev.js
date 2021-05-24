"use strict";

$(document).ready(function () {
  //banner owl carosel
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1
  }); //Top-Sale owl carosel

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
      }
    }
  }); // Isotop

  var $grid = $(".grid").isotope({
    itemSelector: ".grid-item",
    layoutMode: "fitRows"
  }); //filter items on button click

  $(".button-group").on("click", "button", function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  }); //New Phones owl carosel

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
      }
    }
  }); //Blogs owl carosel

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
      }
    }
  }); //product quantity

  var inputContainer = document.querySelectorAll(".qty-container");
  inputContainer.forEach(function (container) {
    var btnUp = container.querySelectorAll(".qty-up");
    var btnDown = container.querySelectorAll(".qty-down");
    var inputBox = container.querySelectorAll(".qty-input");
    var counter = 1;
    console.log(btnUp);
    btnUp.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (counter < 10) {
          counter += 1;
          console.log(counter);
          inputBox.forEach(function (element) {
            element.value = counter;
          });
        }
      });
    });
    btnDown.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        if (counter > 1) {
          counter -= 1;
          console.log(counter);
          inputBox.forEach(function (element) {
            element.value = counter;
          });
        }
      });
    });
  });
});