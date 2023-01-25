$(document).ready(function () {
    $(".c-works__imglist li").each(function () {
        $(".c-works__imgitem", this).click(function () {
            var contents = $(this).next().html();
            $(".c-modalcard").fadeIn(500);
            $(".c-modalcard .c-modalcard__contents").html(contents);
        });
    });

    $(".c-intaview__nav li").each(function () {
        $(".c-intaview__navlink", this).click(function () {
            var contents = $(this).next().html();
            $(".c-modalcard").fadeIn(500);
            $(".c-modalcard").addClass("style");
            $(".c-modalcard .c-modalcard__contents").html(contents);
        });
    });


    $(".c-modalcard__btnclose, .c-modalcard__overlay").click(function () {
        $(".c-modalcard").hide();
        $(".c-modalcard .c-modalcard__contents").html("");
        $(".c-modalcard").removeClass("style");

    });


    //scroll
    $('a[href*="#"]').on('click', function (e) {
        var fixedHeight = 50;
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top - fixedHeight }, 300);
        e.preventDefault();
    });

    //tab
    $('.c-recruit__tablink').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.c-recruit__tablink').removeClass('is-current');
        $('.c-recruit__tabcontent').removeClass('is-current');

        $(this).addClass('is-current');
        $("#" + tab_id).addClass('is-current');
    });

    //animation
    $('.c-trans').on('inview', function (event, isInView, visiblePartX, visiblePartY) {
        if (isInView) {
            $(this).stop().addClass('c-action');
        }
    });

    //menu SP

    $('.c-header__spmenu').on('click', function () {
        $('.c-header__spmenu').toggleClass("is-open");
        $('.c-navitop').slideToggle("4000");
        document.body.classList.toggle('is-overflow');
    });
    $(".c-navitop li, .c-navitop, .c-header__splist").click(function () {
        if ($(window).width() < 768) {
            $(".c-navitop").hide("3000");
            $('.c-header__spmenu').removeClass("is-open");
        }
    });

    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $('.c-header__spmenu').removeClass("is-open");
            $(".c-navitop").css("display", "unset");
        } else {
            $(".c-navitop").css("display", "none");
            $('.c-header__spmenu').removeClass("is-open");
        }
    });
    //scroll Top
    $('.c-backtotop').hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
            $('.c-backtotop').fadeIn();
        } else {
            $('.c-backtotop').fadeOut();
        }
    });

});

function Slider() {
    sliders = [
        {
            pic: 'assets/img/page/page_bg01.png',
            spPic: 'assets/img/page/page_bg01_sp@2x.png',
        },
        {
            pic: 'assets/img/page/page_bg02@2x.png',
            spPic: 'assets/img/page/page_bg02_sp@2x.png',
        },
        {
            pic: 'assets/img/page/page_bg03@2x.png',
            spPic: 'assets/img/page/page_bg03_sp@2x.png',
        },
    ];

    sliders.sort(function () {
        return 0.5 - Math.random();
    });
    var banTitleHtml = '';
    var curAnimate;
    for (var i = 0; i < sliders.length; i++) {
        var n = Math.floor(Math.random() * 3);
        if (i == (sliders.length - 1)) {
            while (n == curAnimate || n == sliders[0]['animate']) {
                n = Math.floor(Math.random() * 3);
            }
        } else {
            while (n == curAnimate) {
                n = Math.floor(Math.random() * 3);
            }
        }

        curAnimate = n;
        sliders[i]['animate'] = n;
        banTitleHtml += '<li>' + sliders[i]['title'] + '</li>';
    }
    function random() {
        var n = Math.floor(Math.random() * 3);
        if (n == curAnimate) {
            return random();
        } else {
            curAnimate = n;
            return n;
        }
    }

    initBackstretch();
}

$(window).scroll(function () {
    if ($(window).scrollTop() > $(window).height() + 40) {
        $('.backstretch , .c-topslider__banner').stop().css("display", "none");
        $('.topslider').stop().animate({ opacity: 0 }, 0.5);
    } else {
        $('.c-topslider__banner, .backstretch').stop().css("display", "block");
        $('.c-topslider').stop().animate({ opacity: 1 }, 0.5);
    }
}).trigger('scroll');