/*
Theme Name: Partin
Description: Partin - Political Campaign and Party HTML5 Responsive Template
Version: 1.0
License:
License URI:
*/

/*=======================================================================
[Table of contents]
=========================================================================
1. All Revolution Slider
2. Video Popup and Tab
3. Suffle Grid
4. All Testimonial
5. All Silck Slider
6. All Count Down
7. Image Strech Column
8. Search PopUp 
9. Skill Bar
10. Back To Top
11. Mobile Menu
12. Fixed Header
13. Preloder
14. Contact From Submit
15. Fun Fact Count
*/

(function ($) {
    'use strict';
	
    /*--
    	Mobile Menu
    ------------------------*/
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "990",
        meanMenuContainer: ".mobile-menu",
        onePage: false,
    });	
	
    /*---------------------
    Nivo Slider active js 
    --------------------- */
    $('#mainSlider').nivoSlider({
        directionNav: true,
        animSpeed: 500,
        slices: 18,
        pauseTime: 300000,
        pauseOnHover: false,
        controlNav: true,
        prevText: '<i class="fa fa-angle-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-angle-right nivo-next-icon"></i>'
    });
   /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();	
    /*--------------------------------------------------------
    / 2. Video Popup and Tab
    /----------------------------------------------------------*/
    $('.video_popup').magnificPopup({
        type: 'iframe'
    });
    
    if($('.all_upcoming').length > 0){
        $('.upes_item a').on('click', function(e){
            e.preventDefault();
            var id = $(this).attr('href');
            $('.donation').removeClass('active');
            $(this).addClass('active');
            
            $('.all_upcoming .donation').removeClass('active');
            $(id).addClass('active');
        });
    }
    
    /*--------------------------------------------------------
    / 3. Suffle Grid
    /----------------------------------------------------------*/
    $(window).on('load', function(){
       
        if($('.shuffle_grid').length > 0){
            var Shuffle = window.Shuffle;
            var element = document.querySelector('.shuffle_grid');
            var sizer = element.querySelector('.shuffle_sizer');

            var shuffleInstance = new Shuffle(element, {
                itemSelector: '.shuff_item',
                sizer: sizer
            });
        }
        
    });
    /*--------------------------------------------------------
    / 4. All Testimonial
    /----------------------------------------------------------*/
    $('.testimonial_slider').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true
    });
    
    $('.pmts_slider').owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true
    });
    
    $('.par_img_slider').owlCarousel({
        loop: true,
        nav: false,
        items: 4,
        dots: false,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
    
    $('.principle_slider').owlCarousel({
        loop: false,
        nav: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        items: 4,
        dots: false,
        margin: 30,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            992:{
                items:3
            },
            1440:{
                items:4
            }
        }
    });
    
    $('.up_event_slider').slick({
        infinite: false,
        slidesToShow: 1.94,
        arrows: false,
        autoplay: false,
        dots: true,
        responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1.51
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1.30
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
    });
    
    $('.test_slide').owlCarousel({
        loop: true,
        responsiveClass: true,
        nav: true,
        items: 1,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
    });
    
    $('.instagram_slide').owlCarousel({
        loop: false,
        nav: false,
        navText: false,
        items: 5,
        autoplay: true,
        dots: false,
        margin: 0,
        responsive:{
            0:{
                items: 1
            },
            500:{
                items: 2
            },
            767:{
                items: 3
            },
            992:{
                items: 4
            },
            1024:{
                items:5
            }
        }
    });
    /*--------------------------------------------------------
    / 5. All Silck Slider
    /----------------------------------------------------------*/
    $('.ab_slider').slick({
        infinite: false,
        slidesToShow: 1.885,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        autoplay: false,
        dots: false,
        responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1.44
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1.30
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
    });
    
    $('.ab_slider2').slick({
        infinite: false,
        slidesToShow: 1.68,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
        autoplay: false,
        dots: false,
        responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1.21
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1.30
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
    });
    
    $('.lp_slider').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '420px',
        arrows: false,
        autoplay: false,
        dots: true,
        responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '220px'
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '200px'
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '100px'
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px'
                    }
                }
            ]
    });
    
    $('.bpost_slider').slick({
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '420px',
        arrows: false,
        autoplay: false,
        dots: true,
        responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '250px'
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '200px'
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '100px'
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                        centerPadding: '0px'
                    }
                }
            ]
    });
    /*--------------------------------------------------------
    / 6. All Count Down
    /----------------------------------------------------------*/
    var countdown = $('#countdown_dashboard')
    if (countdown.length > 0) {
        var d = 27;
        var m = 6;
        var y = 2020;
        $('#countdown_dashboard').countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS',
            labels: ['Yrs', 'Mts', 'Wks', 'Day', 'Hour', 'Min', 'Sec'],
            labels1: ['Yrs', 'Mts', 'Wks', 'Day', 'Hour', 'Min', 'Sec'],
        });
    }
    
    var countdown2 = $('#countdown_election');
    if (countdown2.length > 0) {
        var d = 27;
        var m = 6;
        var y = 2023;
        $('#countdown_election').countdown({
            until: new Date(y, m - 1, d),
            format: 'ODHMS'
        });
    }
    
    var countdown3 = $('#countdown_event');
    if (countdown3.length > 0) {
        var d = 27;
        var m = 6;
        var y = 2020;
        $('#countdown_event').countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }    

    /*--------------------------------------------------------
    / 8. Search PopUp 
    /----------------------------------------------------------*/
   if ($(".searchToggler").length > 0)
   {
      var todg = true;
      $(".searchToggler").on("click", function (e) {
         e.preventDefault();
         if (todg)
         {
            $(".searchFixed").fadeIn("slow");
            $('body').addClass('overflow_hidden');
            $('.searchToggler').addClass('active');
            todg = false;
         }
         else
         {
            $(".searchFixed").fadeOut("slow");
            $('body').removeClass('overflow_hidden');
            $('.searchToggler').removeClass('active');
            todg = true;
         }
      });

      $(document).mouseup(function (e) {
         var container = $(".searchForms");

         if (!container.is(e.target) && container.has(e.target).length === 0)
         {
            $(".searchFixed").fadeOut("slow");
            $('body').removeClass('overflow_hidden');
            $('.searchToggler').removeClass('active');
            todg = true;
         }
      });
   }
   
   if ($(".register_popup").length > 0)
   {
      var todg = true;
      $(".register_popup").on("click", function (e) {
         e.preventDefault();
         if (todg)
         {
            $(".registerFixed").fadeIn("slow");
            $('body').addClass('overflow_hidden_2');
            $('.register_popup').addClass('active');
            todg = false;
         }
         else
         {
            $(".registerFixed").fadeOut("slow");
            $('body').removeClass('overflow_hidden_2');
            $('.register_popup').removeClass('active');
            todg = true;
         }
      });

      $(document).mouseup(function (e) {
         var container = $(".register_Forms");

         if (!container.is(e.target) && container.has(e.target).length === 0)
         {
            $(".registerFixed").fadeOut("slow");
            $('body').removeClass('overflow_hidden_2');
            $('.register_popup').removeClass('active');
            todg = true;
         }
      });
   }
    
    /*--------------------------------------------------------
    / 9. Skill Bar
    /----------------------------------------------------------*/   
    if ($(".single_skills").length > 0)
    {
        $('.single_skills').appear();
        $('.single_skills').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".single_skills").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".skillInner", this).animate({'width': datacount + '%'}, 4000);
            if (coun)
            {
                $(this).find('.parcent').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 4000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }
    /*--------------------------------------------------------
    / 10. Back To Top
    /----------------------------------------------------------*/     
    var back = $("#backtotop"),
        body = $("body, html");
    $(window).on('scroll', function(){
        if($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        }
        else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function(e){
        e.preventDefault();
        body.animate({scrollTop : 0}, 800);
        return false;
    });
    /*--------------------------------------------------------
    / 12. Fixed Header
    /--------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $("#fix_nav").addClass('fixedHeader animated flipInX');
        } else
        {
            $("#fix_nav").removeClass('fixedHeader animated flipInX');
        }
    });
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 250)
        {
            $("#fix_nav_2").addClass('fixedHeader animated flipInX');
        } else
        {
            $("#fix_nav_2").removeClass('fixedHeader animated flipInX');
        }
    });
    /*--------------------------------------------------------
    / 14. Contact From Submit
    /---------------------------------------------------------*/
    if ($("#contactForm").length > 0)
    {
        $("#contactForm").on('submit', function(e) {
            e.preventDefault();
            $("#con_submit").val('Processsing...');
            var name = $("#con_name").val();
            var phone = $("#con_phone").val();
            var email = $("#con_email").val();
            var subject = $("#con_subject").val();
            var message = $("#con_message").val();
            var required = 0;
            $(".required", this).each(function() {
                if ($(this).val() == '')
                {
                    $(this).addClass('reqError');
                    required += 1;
                }
                else
                {
                    if ($(this).hasClass('reqError'))
                    {
                        $(this).removeClass('reqError');
                        if (required > 0)
                        {
                            required -= 1;
                        }
                    }
                }
            });
            if (required === 0)
            {
                $.ajax({
                    type: "POST",
                    url: 'ajax/mail.php',
                    data: {name: name, phone: phone, email: email, subject: subject, message: message},
                    success: function(data)
                    {
                        //alert(data);
                        $("#con_submit").val('Done!');
                        $("#contactForm input, #contactForm textarea").val('');
                        setTimeout(function() {
                            $("#con_submit").val('Send Message');
                        }, 2500);
                    }
                });
            }
            else
            {
                $("#con_submit").val('Failed!');
            }
        });
        $(".required").on('keyup', function() {
            $(this).removeClass('reqError');
        });
    }
    
    /*--------------------------------------------------------
     / 15. Fun Fact Count
     /----------------------------------------------------------*/
    var skl = true;
    $('.fun_fact').appear();
    $('.fun_fact').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 4000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        if (Number(num) > 999) {
                            while (/(\d+)(\d{3})/.test(num)) {
                                num = num.replace(/(\d+)(\d{3})/, '<span class="countSpan">' + '$1' + '</span>' + '$2');
                            }
                        }
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });  
})(jQuery);