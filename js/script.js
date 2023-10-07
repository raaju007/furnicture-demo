// product carousel
var multipleCardCarousel = document.querySelector("#carouselExampleControls");

if (window.matchMedia("(min-width: 576px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;

  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 2) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        900
      );
    }
  });

  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        900
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("carousel slide"); // Add 'carousel' class
}

// let x = 0;
// let p = -10;
// let i = 1;
// let doom = document.getElementsByClassName("item");
// let confr = (doom.length - 3) * -1130;
// let confl = 0;

// // Botón izquierdo
// document.getElementById("l").addEventListener("click", function () {
//   x += 455;
//   if (x > confl) {
//     x = confr;
//   }
//   document.querySelector("#move").style.marginLeft = x + "px";
// });

// // Botón derecho
// document.getElementById("r").addEventListener("click", function () {
//   x -= 455;
//   if (x < confr) {
//     x = confl;
//   }
//   document.querySelector("#move").style.marginLeft = x + "px";
// });

// let x = 0;
// let p = -3;
// let i = 1;
// let doom = document.getElementsByClassName("item");
// let confr = (doom.length - 3) * -450;
// let confl = 0;

// // Botón izquierdo
// document.getElementById("l").addEventListener("click", function () {
//   x += 100;
//   if (x > confl) {
//     x = confr - 100;
//   } else {
//     document.getElementById("move").style.marginLeft = x + "px";
//   }
// });

// // Botón derecho
// document.getElementById("r").addEventListener("click", function () {
//   x += -100;
//   p += -3;
//   if (x < confr) {
//     x = 100;
//   } else {
//     document.getElementById("move").style.marginLeft = x + "px";
//   }
// });
