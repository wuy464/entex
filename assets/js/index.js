
var ua = navigator.userAgent.toLowerCase();
var isiPad = ua.match(/iPad/i) == "ipad";
var isiOS = /(iPhone|iPad|iPod|iOS|Mac)/i.test(ua);

var spW = 768,    // SP max width, not contain
    winW,         // Window width
    winH,         // Window height
    isSp,         // Is SP or not
    isChange,     // Is change to pc or sp
    winScrollTop; // Window scrollTop

function initCommon() {
  initResize();
}

function initResize() {
  $(window).resize(function(){
    winW = $('html').css('overflow', 'hidden').width();
    winH = $(window).height();
    isChange = isSp !== undefined && isSp != (winW < spW);
    isSp = winW < spW;
    $('html').removeAttr('style');
  }).trigger('resize');
}





$(initCommon);


