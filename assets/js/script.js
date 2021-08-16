$(document).ready(function() {
  $('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });
});
// CATEGORY SEARCH BAR MOBILE START
var sp = document.querySelector('.search-open');
          var searchbar = document.querySelector('.search-inline');
          var shclose = document.querySelector('.search-close');
          function changeClass() {
              searchbar.classList.add('search-visible');
          }
          function closesearch() {
              searchbar.classList.remove('search-visible');
          }
          sp.addEventListener('click', changeClass);
          shclose.addEventListener('click', closesearch);
// CATEGORY SEARCH BAR MOBILE END
/*** Start Product inside owl carousel Js ****/
jQuery(document).ready(function() {
  var sync1 = jQuery("#sync1");
  var sync2 = jQuery("#sync2");
  var slidesPerPage = 5; 
  var syncedSecondary = true;

  sync1
    .owlCarousel({
    items: 1,
    slideSpeed: 3000,
    nav: true,

    //   animateOut: 'fadeOut',
    animateIn: "fadeIn",
    autoplayHoverPause: true,
    autoplaySpeed: 1400, 
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        item: 1,
        autoplay: false
      },
      600: {
        items: 1,
        autoplay: false
      }
    },
    responsiveRefreshRate: 200,
    navText: [
    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
  ]
  })
    .on("changed.owl.carousel", syncPosition);

  sync2
    .on("initialized.owl.carousel", function() {
    sync2
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: slidesPerPage,
    dots: true,
    //   nav: true,
    smartSpeed: 1000,
    slideSpeed: 1000,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync2.find(".owl-item.active").length - 1;
    var start = sync2
    .find(".owl-item.active")
    .first()
    .index();
    var end = sync2
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      sync2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync1.data("owl.carousel").to(number, 300, true);
  });
});

// 
jQuery(document).ready(function() {
  var sync_1 = jQuery("#sync_1");
  var sync_2 = jQuery("#sync_2");
  var slidesPerPage = 5; 
  var syncedSecondary = true;

  sync_1
    .owlCarousel({
    items: 1,
    slideSpeed: 3000,
    nav: true,

    //   animateOut: 'fadeOut',
    animateIn: "fadeIn",
    autoplayHoverPause: true,
    autoplaySpeed: 1400, 
    dots: false,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        item: 1,
        autoplay: false
      },
      600: {
        items: 1,
        autoplay: false
      }
    },
    responsiveRefreshRate: 200,
    navText: [
    '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
    '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
  ]
  })
    .on("changed.owl.carousel", syncPosition);

  sync_2
    .on("initialized.owl.carousel", function() {
    sync_2
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: slidesPerPage,
    dots: true,
    //   nav: true,
    smartSpeed: 1000,
    slideSpeed: 1000,
    slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }

    //end block

    sync_2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = sync_2.find(".owl-item.active").length - 1;
    var start = sync_2
    .find(".owl-item.active")
    .first()
    .index();
    var end = sync_2
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      sync_2.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      sync_2.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      sync_1.data("owl.carousel").to(number, 100, true);
    }
  }

  sync_2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = jQuery(this).index();
    sync_1.data("owl.carousel").to(number, 300, true);
  });
});
/*** End Product inside owl carousel Js ****/


/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
$(document).ready(function(){
  $('.carouselowl').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
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

  });
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });

    });
function wcqib_refresh_quantity_increments() {
    jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
        var c = jQuery(b);
        c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
    })
}
String.prototype.getDecimals || (String.prototype.getDecimals = function() {
    var a = this,
        b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
}), jQuery(document).ready(function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("updated_wc_div", function() {
    wcqib_refresh_quantity_increments()
}), jQuery(document).on("click", ".plus, .minus", function() {
    var a = jQuery(this).closest(".quantity").find(".qty"),
        b = parseFloat(a.val()),
        c = parseFloat(a.attr("max")),
        d = parseFloat(a.attr("min")),
        e = a.attr("step");
    b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
});

var closebtns = document.getElementsByClassName("close");
var i;

for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
    this.parentElement.style.display = 'none';
  });
}
$('.icon-wishlist').on('click', function () {
	$(this).toggleClass('in-wishlist');
  });

  $('.icon-wishlist1').on('click', function () {
	$(this).toggleClass('in-wishlist1');
  });

  $('.icon-wishlist__icon').on('click', function () {
  $(this).toggleClass('in-wishlist__icon');
  });
  
   var deadline = new Date("july 30, 2021 15:37:25").getTime();             
   var x = setInterval(function() {
   var currentTime = new Date().getTime();                
   var t = deadline - currentTime; 
   var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
   var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
   var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
   var seconds = Math.floor((t % (1000 * 60)) / 1000);

  $(".days-timer").html(days);
  $(".hours-timer").html(hours);
  $(".minutes-timer").html(minutes);
  $(".seconds-timer").html(seconds);
   if (t < 0) {
      clearInterval(x); 
      document.getElementById("time-up").innerHTML = "TIME UP"; 
      document.getElementById("day").innerHTML ='0'; 
      document.getElementById("hour").innerHTML ='0'; 
      document.getElementById("minute").innerHTML ='0' ; 
      document.getElementById("second").innerHTML = '0'; 
   } 
}, 1000);  

// 
$(document).ready(function() {
  $(".SlickCarousel").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 3, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".Container .Head .Arrows  "), // Class For Arrows Buttons
    prevArrow: '<span class="fa fa-angle-left"></span>',
    nextArrow: '<span class="fa fa-angle-right"></span>',
    easing: "linear",
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }, ],
  })
})

  $(document).ready(function() {
  $(".SlickCarousel2").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 3, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".Container .Head .Arrows2  "), // Class For Arrows Buttons
    prevArrow: '<span class="fa fa-angle-left"></span>',
    nextArrow: '<span class="fa fa-angle-right"></span>',
    easing: "linear",
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }, ],
  })
})

   $(document).ready(function() {
  $(".SlickCarousel3").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 3, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".Container .Head .Arrows3  "), // Class For Arrows Buttons
    prevArrow: '<span class="fa fa-angle-left"></span>',
    nextArrow: '<span class="fa fa-angle-right"></span>',
    easing: "linear",
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }, ],
  })
})

    $(document).ready(function() {
  $(".SlickCarousel4").slick({
    rtl: false, // If RTL Make it true & .slick-slide{float:right;}
    autoplay: true,
    autoplaySpeed: 5000, //  Slide Delay
    speed: 800, // Transition Speed
    slidesToShow: 3, // Number Of Carousel
    slidesToScroll: 1, // Slide To Move 
    pauseOnHover: false,
    appendArrows: $(".Container .Head .Arrows4  "), // Class For Arrows Buttons
    prevArrow: '<span class="fa fa-angle-left"></span>',
    nextArrow: '<span class="fa fa-angle-right"></span>',
    easing: "linear",
    responsive: [{
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 641,
      settings: {
        slidesToShow: 3,
      }
    }, {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      }
    }, ],
  })
})
    $(document).ready(function () {
    $("#accordion li > h4").click(function () {

        if ($(this).next().is(':visible')) {
            $(this).next().slideUp(300);
            $(this).children(".plusminus").text('+');
        } else {
            $(this).next("#accordion ul").slideDown(300);
            $(this).children(".plusminus").text('-');
        }
    });
    /*Start +/- Button js*/
jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity12 input');
jQuery('.quantity12').each(function() {
  var spinner = jQuery(this),
    input = spinner.find('input[type="number"]'),
    btnUp = spinner.find('.quantity-up'),
    btnDown = spinner.find('.quantity-down'),
    min = input.attr('min'),
    max = input.attr('max');

  btnUp.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue >= max) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

  btnDown.click(function() {
    var oldValue = parseFloat(input.val());
    if (oldValue <= min) {
      var newVal = oldValue;
    } else {
      var newVal = oldValue - 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
  });

});

/*End +/- Button js*/
});
    
$(document).ready(function() {
        $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
        $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
    });

  /*** START PRICE RANGE JS ****/
  

$(function () {
  $("#price-range").slider({
    range: true,
    min: 0,
    max: 9000,
    values: [0, 9000],
    slide: function (event, ui) {
      $("#priceRange").val("$" + ui.values[0] + " - $" + ui.values[1]);
    }
  });
  $("#priceRange").val("$" + $("#price-range").slider("values", 0) + " - $" + $("#price-range").slider("values", 1));
});
/*** END PRICE RANGE JS ****/

    $(document).ready(function () {
        $(".list-group-two").click(function(){
          $(".HEADPHONES").hide();
        });

        $(".list-group-one").click(function(){
            $(".HEADPHONES").show();
          });
        $(".list-group-two").click(function(){
          $(".listed").hide();
        });

        $(".list-group-one").click(function(){
            $(".listed").show();
          });
        $(".list-group-two").click(function(){
          $(".rating").hide();
        });

        $(".list-group-one").click(function(){
            $(".rating").show();
          });
        $(".list-group-two").click(function(){
          $(".checkout-icon").hide();
        });

        $(".list-group-one").click(function(){
            $(".checkout-icon").show();
          });
        
        $(".list-group-two").click(function(){
          $(".listed-btn").hide();
        });

        $(".list-group-one").click(function(){
            $(".listed-btn").show();
          });
        });
//

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('#back-to-top').fadeIn();
    } else {
      $('#back-to-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 400);
    return false;
  });
});

window.onscroll = function () {
  scrollFunction();
};
var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").style.display = "none";
    document.getElementById("heading").style.display = "none";
  } else {
    document.getElementById("nextBtn").innerHTML = "Continue";
  }
}

function nextPrev(n) {
 
  var x = document.getElementsByClassName("tab ");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

function setCaretPosition(elem, caretPos) {
    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}



//CATEGORY SEARCH BAR DESKTOP START
$(document).ready(function(e){
  $('.search-panel .dropdown-menu').find('a').click(function(e) {
  e.preventDefault();
  var param = $(this).attr("href").replace("#","");
  var concept = $(this).text();
  $('.search-panel span#search_concept').text(concept);
  $('.input-group #search_param').val(param);
});
/*Start zoom js*/

$(document).ready(function(){
  $('.icon-wishlist12').on('click', function () {
 $(this).toggleClass('in-wishlist12');
});
$('.ex1').zoom();
});
/*End zoom js*/
});
//CATEGORY SEARCH BAR DESKTOP END


