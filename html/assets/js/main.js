//-------------------------------------
// Back to top
//-------------------------------------
"use strict";
var BIbackToTop = function () {

    var backToTop_app = function () {

        //Show Button Back to Top
        $(window).scroll(function () {
            if ($(this).scrollTop() > 120) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });

        //Click Button Back to Top
        $('.back-to-top').click(function () {
            $('html, body').scrollTop(0);
            return false;
        });

    }

    return {
        init: function () {
            backToTop_app();
        }
    };
}();
//-------------------------------------
// Back to top
//-------------------------------------

//-------------------------------------
// data-image-src to background-image
//-------------------------------------
"use strict";
var BIdataImage = function () {

    var dataImage_app = function () {

        $("[data-image-src]").css('background-image', function () {
            var bg = ('url(' + $(this).data("image-src") + ')');
            return bg;
        });
    }

    return {
        init: function () {
            dataImage_app();
        }
    };
}();
//-------------------------------------
// data-image-src to background-image
//-------------------------------------

//-------------------------------------
// Header & Menu
//-------------------------------------
// assets/lib/superfish/superfish.min.js
"use strict";
var BIheaderMenu = function () {

    var headerMenu_app = function () {

        // Initiate superfish on nav menu
        $('.nav-menu').superfish({
            animation: {
                opacity: 'show'
            },
            speed: 400
        });

        // Mobile Menu
        if ($('#nav-menu-container').length) {
            var $mobile_nav = $('#nav-menu-container').clone().prop({
                id: 'mobile-nav'
            });
            $mobile_nav.find('> ul').attr({
                'class': '',
                'id': ''
            });
            $('body').append($mobile_nav);
            $('body .logo-menu-box').prepend('<button type="button" id="mobile-nav-toggle"><i class="las la-bars"></i></button>');
            $('body').append('<div id="mobile-body-overly"></div>');
            $('#mobile-nav').find('.menu-has-children').prepend('<i class="las la-plus"></i>');

            $(document).on('click', '.menu-has-children i', function (e) {
                $(this).next().toggleClass('menu-item-active');
                $(this).nextAll('ul').eq(0).slideToggle();
                $(this).toggleClass("la-minus la-plus");
            });

            $(document).on('click', '#mobile-nav-toggle', function (e) {
                $('body').toggleClass('mobile-nav-active');
                $('#mobile-nav-toggle i').toggleClass('la-times la-bars');
                $('#mobile-body-overly').toggle();
            });

            $(document).click(function (e) {
                var container = $("#mobile-nav, #mobile-nav-toggle");
                if (!container.is(e.target) && container.has(e.target).length === 0) {
                    if ($('body').hasClass('mobile-nav-active')) {
                        $('body').removeClass('mobile-nav-active');
                        $('#mobile-nav-toggle i').toggleClass('la-times la-bars');
                        $('#mobile-body-overly').fadeOut();
                    }
                }
            });
        } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
            $("#mobile-nav, #mobile-nav-toggle").hide();
        }

        // Header scroll 
        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass('header-scrolled');
            } else {
                $('#header').removeClass('header-scrolled');
            }
        });
    }

    return {
        init: function () {
            headerMenu_app();
        }
    };
}();
//-------------------------------------
// Header & Menu
//-------------------------------------

//-------------------------------------
// Intro
//-------------------------------------
//assets/lib/touchSwipe/touchSwipe.min.js
"use strict";
var BIintro = function () {

    var intro_app = function () {

        // Intro Carousel
        var introCarousel = $(".carousel");
        var introCarouselIndicators = $(".carousel-indicators");
        introCarousel.find(".carousel-inner").children(".carousel-item").each(function (index) {
            (index === 0) ?
                introCarouselIndicators.append("<li data-bs-target='#introHome' data-bs-slide-to='" + index + "' class='active' aria-current='true'></li>") :
                introCarouselIndicators.append("<li data-bs-target='#introHome' data-bs-slide-to='" + index + "' ></li>");
        });

        // Mobile Touch Slider
        $(".carousel").swipe({
            swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
                if (direction == 'left') $(this).carousel('next');
                if (direction == 'right') $(this).carousel('prev');
            },
            allowPageScroll: "vertical"
        });
    }

    return {
        init: function () {
            intro_app();
        }
    };
}();
//-------------------------------------
// Intro
//-------------------------------------

//-------------------------------------
//Element Animation
//-------------------------------------
//assets/lib/scrollCue/scrollCue.min.js
"use strict";
var BIanimation = function () {

    var animation_app = function () {

        scrollCue.init();
    }

    return {
        init: function () {
            animation_app();
        }
    };
}();
//-------------------------------------
//Element Animation
//-------------------------------------

//-------------------------------------
//Owl Carousel
//-------------------------------------
//assets/lib/owlcarousel/owl.carousel.min.js
"use strict";
var BIowlCarousel = function () {

    var owlCarousel_app = function () {

        //Owl Carousel 1 Col
        $('.oc-1col').owlCarousel({
            margin: 0,
            dotsEach: true,
            nav: true,
            loop: true,
            items: 1,
            smartSpeed: 1000,
            responsive: {
                0: {
                    nav: false,
                },
                767.98: {
                    nav: true,
                },
            }
        });

        //Owl Carousel 3 Col - No Nav
        $('.oc-3col-no-nav').owlCarousel({
            margin: 30,
            nav: false,
            dotsEach: true,
            loop: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                767.98: {
                    items: 2
                },
                991.98: {
                    items: 3
                }
            }
        });

        //Owl Carousel 4 Col
        $('.oc-4col').owlCarousel({
            margin: 20,
            nav: true,
            dotsEach: true,
            loop: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                },
                767.98: {
                    items: 2
                },
                991.98: {
                    items: 3
                },
                1199.98: {
                    items: 4
                }
            }
        });

        //Slider Center 2col
        $('.oc-2col-center').owlCarousel({
            margin: 28,
            nav: true,
            dotsEach: true,
            center: true,
            loop: true,
            smartSpeed: 1000,
            responsive: {
                0: {
                    nav: false,
                    items: 1,
                },
                767.98: {
                    nav: true,
                    items: 2,
                },
            }
        });

    }

    return {
        init: function () {
            owlCarousel_app();
        }
    };
}();
//-------------------------------------
//Owl Carousel
//-------------------------------------

//-------------------------------------
//Datetime
//-------------------------------------
//assets/lib/datetime/moment.min.js
//assets/lib/datetime/timepicker.min.js
//assets/lib/datetime/datepicker.min.js
//assets/lib/datetime/daterangepicker.min.js
"use strict";
var BIdateTime = function () {

    var dateTime_app = function () {

        // Get Today & Tomorrow
        var start = moment()
        var end = moment().add(1, 'days');

        // Daterange | Check Room
        $('.daterange-checkroom input.daterange-checkin').val(start.format('D MMM, YYYY'));
        $('.daterange-checkroom input.daterange-checkout').val(end.format('D MMM, YYYY'));
        $('.daterange-checkroom').daterangepicker({
            opens: 'right',
            drops: 'auto',
            startDate: start,
            endDate: end,
            autoUpdateInput: false,
            autoApply: true,
            locale: {
                cancelLabel: 'Clear'
            }
        });
        $('.daterange-checkroom').on('apply.daterangepicker', function (ev, picker) {
            $('.daterange-checkroom input.daterange-checkin').val(picker.startDate.format('D MMM, YYYY'));
            $('.daterange-checkroom input.daterange-checkout').val(picker.endDate.format('D MMM, YYYY'));
        });

        // Timepickers | Standard
        $('.timepicker-standard').timepicker({
            icons: {
                up: 'las la-angle-up',
                down: 'las la-angle-down'
            }
        });

    }

    return {
        init: function () {
            dateTime_app();
        }
    };
}();
//-------------------------------------
//Datetime
//-------------------------------------

//-------------------------------------
// Lightbox
//-------------------------------------
//assets/lib/lightbox/glightbox.min.js
//assets/lib/plyr/plyr.min.js
"use strict";
var Blightbox = function () {

    var ightbox_app = function () {

        // Lightbox gallery
        var galleryLightbox = GLightbox({
            selector: '.glightbox'
        });

        // Lightbox media
        var mediaLightbox = GLightbox({
            selector: '.media-glightbox',
            touchNavigation: true,
            loop: false,
            zoomable: false,
            autoplayVideos: true,
            moreLength: 0,
            slideExtraAttributes: {
                poster: ''
            },
            plyr: {
                config: {
                    ratio: '16:9',
                    muted: false,
                    hideControls: true,
                    youtube: {
                        noCookie: false,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: false,
                        portrait: false,
                        title: false,
                        speed: true,
                        transparent: false
                    }
                }
            },
        });

    }

    return {
        init: function () {
            ightbox_app();
        }
    };
}();
//-------------------------------------
// Lightbox
//-------------------------------------

//-------------------------------------
// Gallery 
//-------------------------------------
//assets/lib/isotope/isotope.min.js
//assets/lib/imagesLoaded/imagesloaded.min.js
//assets/lib/masonry/masonry.min.js
"use strict";
var BIgallery = function () {

    var gallery_app = function () {

        // Gallery Free 5 columns  (With Filter)
        var galleryFreeFilter = $('.gallery-free-filter .grid-free').isotope({
            masonry: {
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true,
            },
            transitionDuration: '0.8s',
            transitionDuration: 600
        });
        galleryFreeFilter.imagesLoaded().progress(function () {
            galleryFreeFilter.isotope('layout');
        });
        $('.gallery-free-filter .grid-filter-free li').on('click', function () {
            $(".gallery-free-filter .grid-filter-free li").removeClass('filter-active');
            $(this).addClass('filter-active');
            galleryFreeFilter.isotope({ filter: $(this).data('filter') });
        });

    }

    return {
        init: function () {
            gallery_app();
        }
    };
}();
//-------------------------------------
// Gallery
//-------------------------------------

//-------------------------------------
// plyr player
//-------------------------------------
//assets/lib/plyr/plyr.min.js
"use strict";
var BIplyr = function () {

    var plyr_app = function () {

        var player = new Plyr('.html5-player');
        var player = new Plyr('.vimeo-player');
        var player = new Plyr('.youtube-player');

    }

    return {
        init: function () {
            plyr_app();
        }
    };
}();
//-------------------------------------
// plyr player
//-------------------------------------

//-------------------------------------
//Preloading
//-------------------------------------  
"use strict";
var BIpreLoad = function () {

    var preLoad_app = function () {

        $("#loading").delay(1000).fadeOut(500);

    }

    return {
        init: function () {
            preLoad_app();
        }
    };
}();
//-------------------------------------
//Preloading
//-------------------------------------  

//-------------------------------------
//Form validation
//-------------------------------------  
"use strict";
var BIvalidation = function () {

    var prevalidation_app = function () {

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })

    }

    return {
        init: function () {
            prevalidation_app();
        }
    };
}();
//-------------------------------------
//Form validation
//-------------------------------------  

jQuery(document).ready(function () {

    // Back to top
    BIbackToTop.init();

    //Data Image Src
    BIdataImage.init()

    // Header & Menu
    BIheaderMenu.init();

    // Intro
    BIintro.init();

    // Element Animation
    BIanimation.init();

    // Owl Carousel
    BIowlCarousel.init();

    // Datetime
    BIdateTime.init();

    //Lightbox
    Blightbox.init();

    // Gallery
    BIgallery.init();

    // plyr player
    BIplyr.init();

    // Validation
    BIvalidation.init();

    // Preloading
    BIpreLoad.init();

});

