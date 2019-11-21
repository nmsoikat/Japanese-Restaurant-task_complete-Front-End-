(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();

        // ----------------------------------------------------------------------
        // OWL CAROUSEL ACTIVE
        // ----------------------------------------------------------------------
        $(".case-study-slider").owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            dots: true,
            nav: false,
            margin: 0
        });


        // ----------------------------------------------------------------------
        // MAIN MENU SCROLLED FIXED
        // ----------------------------------------------------------------------
        $(document).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $('.main-menu, .slicknav_menu').addClass("scrolled");
                // alert("scroll")
            } else {
                $('.main-menu, .slicknav_menu').removeClass("scrolled");
                // alert('scroll back')
            }
        });


        // ----------------------------------------------------------------------
        // SCROLL TO HOME
        // ----------------------------------------------------------------------
        let btn = $('.up');
        btn.on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            }, 500);
            // e.preventDefault();
        });
        $(window).on('scroll', function () {
            let a = $(this),
                height = a.height(),
                top = a.scrollTop();

            if (top > height) {
                if (!btn.is(':visible')) {
                    btn.show().animate({
                        "right": "20px",
                    });
                }
            } else {
                btn.hide();
            }

        });




    });


    jQuery(window).load(function () {



    });

}(jQuery));	