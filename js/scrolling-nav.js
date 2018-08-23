(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });

})(jQuery); // End of use strict


// profiles
$(document).ready(function () {
  $('.dennis')
    .mouseover(function () {
    $(this).attr("src", "images/dennis-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/dennis.png");
  });
});

$(document).ready(function () {
  $('.allison')
    .mouseover(function () {
    $(this).attr("src", "images/allison-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/allison.png");
  });
});

$(document).ready(function () {
  $('.claudia')
    .mouseover(function () {
    $(this).attr("src", "images/claudia-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/claudia.png");
  });
});

$(document).ready(function () {
  $('.huy')
    .mouseover(function () {
    $(this).attr("src", "images/huy-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/huy.png");
  });
});

$(document).ready(function () {
  $('.kellyle')
    .mouseover(function () {
    $(this).attr("src", "images/kellyle-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/kellyle.png");
  });
});

$(document).ready(function () {
  $('.aaron')
    .mouseover(function () {
    $(this).attr("src", "images/aaron-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/aaron.png");
  });
});

$(document).ready(function () {
  $('.kate')
    .mouseover(function () {
    $(this).attr("src", "images/kate-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/kate.png");
  });
});

$(document).ready(function () {
  $('.steve')
    .mouseover(function () {
    $(this).attr("src", "images/steve-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/steve.png");
  });
});

$(document).ready(function () {
  $('.barry')
    .mouseover(function () {
    $(this).attr("src", "images/barry-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/barry.png");
  });
});

$(document).ready(function () {
  $('.bam')
    .mouseover(function () {
    $(this).attr("src", "images/bam-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/bam.png");
  });
});

$(document).ready(function () {
  $('.tyler')
    .mouseover(function () {
    $(this).attr("src", "images/tyler-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/tyler.png");
  });
});

$(document).ready(function () {
  $('.kelly')
    .mouseover(function () {
    $(this).attr("src", "images/kelly-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/kelly.png");
  });
});

$(document).ready(function () {
  $('.jill')
    .mouseover(function () {
    $(this).attr("src", "images/jill-insta.png");
  })
  .mouseout(function () {
    $(this).attr("src", "images/jill.png");
  });
});










