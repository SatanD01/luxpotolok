$(document).ready(function () {
    /* ======= Fixed header when scrolled ======= */
    new WOW().init();
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "fullScreen",
            "close"
        ],
        loop: false,
    });
    $('[data-fancybox="sert"]').fancybox({
        buttons: [
            "zoom",
            "fullScreen",
            "close"
        ],
        loop: false,
    });
    const time = 100;
    const step = 100;

    function outNum(num, elem) {
        let e = document.querySelector("#out");
        n = 0;
        let t = Math.round(time / (num / step));
        let interval = setInterval(() => {
            n = n + step;
            if (n == num) {
                clearInterval(interval);
            }
            e.innerHTML = n;
        }, t);
    }

    outNum(17600, "#out");
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });
    /* ======= Scrollspy ======= */
    $('body').scrollspy({target: '#header', offset: 100});

    /* ======= ScrollTo ======= */
    $('a.scrollto').on('click', function (e) {

        //store hash
        var target = this.hash;

        e.preventDefault();

        $('body').scrollTo(target, 800, {offset: -50, 'axis': 'y'});
        //Collapse mobile menu after clicking
        if ($('.navbar-collapse').hasClass('in')) {
            $('.navbar-collapse').removeClass('in').addClass('collapse');
        }

    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function () {
        $(".scroll").click(function () {
            $("html,body").animate({scrollTop: $(".top").offset().top}, "1000");
            return false
        })
    })
    $('.owl-carousel.main').owlCarousel({
        items: 1,
        autoplay: false,
        loop: true,
        autoplayTimeout: 5000,
        touchDrag: true,
        mouseDrag: true,
        dots: true,
        autoHeight: true
    });
    $('.owl-carousel.partners').owlCarousel({
        items:4,
        loop:true,
        margin:50,
        dots: false,
        autoplay:true,
        autoHeight: true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    // Get message after sent
    // $('#getintouch .p-sbm').click(function(){
    //        $('#get-success').empty();
    //        setTimeout(function(){
    //          var text = $('#getintouch .wpcf7-response-output').text();
    //          $('#get-success').html(text);
    //        }, 2000);
    //    });

    /*=== Check box disabled/enabled===*/
    // $('#agree').change(function() {
    //     if ($(this).is(':checked')) {
    //         $('#organise-submit').prop('disabled', false);
    //     } else {
    //         $('#organise-submit').prop('disabled', true);
    //     }
    // });
    /*=== Check box disabled/enabled===*/

    // $('.register').click(function(){
    // 	var section2 = $('.blue_section').offset().top;
    // 	$('html, body').animate({scrollTop:section2}, 1000);
    // });
    /*=== Hide Placeholder on focus===*/
    // $('.hideplaceholder').focus(function(){
    //     $(this).attr('data-val', $(this).attr('placeholder'));
    //     $(this).attr('placeholder', '');
    // });
    // $(".hideplaceholder").blur(function(){
    //     $(this).attr('placeholder', $(this).attr('data-val'));
    // });
    /*===// Hide Placeholder on focus===*/


    // $('.latest_box').owlCarousel({
    // 	items: 1,
    //     autoplay: true,
    //     loop: true,
    //     autoplayTimeout: 4000,
    //     dots: false,
    //     nav: true,
    //     navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
    // });


    // $('.hamburger').click(function(){
    // 	$(this).toggleClass('is-active');
    // });

    // var mql = window.matchMedia('all and (max-width: 768px)');
    //  if (mql.matches) {
    //      $('.navbar .dropdown').append('<div class="caretbox hidden-sm hidden-md hidden-lg"><i class="fa fa-angle-down" aria-hidden="true"></i></div>');
    //          $('.navbar li.dropdown > .caretbox').click(function(){
    //              $(this).parent().toggleClass('open');
    //              return false;
    //          });
    //  } else {

    //      //dropdown on hover
    //      $('.navbar .dropdown').hover(function() {
    //          $(this).addClass('open');
    //      }, function() {
    //          $(this).removeClass('open');
    //      });

    //      //bootstrap parent link click
    //      $('.navbar .navbar-nav>li a').click(function(){
    //          location.href = this.href;
    //      });
    //  }

});