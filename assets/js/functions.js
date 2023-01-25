var sliders, sliderImgs;
$(document).ready(function() {
    Slider();
    setBanner();
});
var winW = $('html').css('overflow', 'hidden').width();
var winH = $(window).height();
var isSp = winW < 768;
    winScrollTop = $(window).scrollTop();

function initBackstretch() {
    sliderImgs = [];
    for (var i = 0; i < sliders.length; i++) {
        sliderImgs.push(sliders[i][isSp ? 'spPic' : 'pic']);
    }
    $('body').backstretch(sliderImgs, {
        duration: 2000,
        speed: 2000,
        fade: 2000,
        before: 'before'
    });
}

function before(i) {

    var obj = $(".slide_img" + i);
    var lw = winW / 30;
    var lh = winH / 20;
    var n = sliders[i]['animate'];

    if (n == 0) {
        TweenLite.to(obj, 7.5, {
            scale: 1.12,
            ease: Power0.easeNone
        });
    } else if (n == 1) {
        TweenLite.to(obj, 0, {
            scale: 1.1,
            x: lw
        })
        TweenMax.to(obj, 8.5, {
            x: -lw,
            ease: Power0.easeNone,
            force3D: false
        })
    } else if (n == 2) {
        TweenLite.to(obj, 0, {
            scale: 1.1,
            y: -lh
        })
        TweenMax.to(obj, 8, {
            y: lh,
            ease: Power0.easeNone,
            force3D: false
        })
    }
}

function setBanner() {
  var w = (winW < 1100) ? 1100 : winW;
  var h = (winW < 1100) ? (winH * 1100 / winW) : winH;
}