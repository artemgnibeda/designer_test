$(window).load(function () {
  $('#fullpage').css('opacity','1');
});



var width = window.innerWidth;
if (width > 550) {
  $('#fullpage').fullpage({
      anchors: ['block1', 'block2', 'block3', 'block4','block5'],
      menu: '#menu',
      css3: true,
      scrollingSpeed: 1500
  });
}
else {
  jQuery(function($){
$('a[href*="#"]').on('click.smoothscroll', function( e ){
var hash    = this.hash, _hash   = hash.replace(/#/,''), theHref = $(this).attr('href').replace(/#.*/, '');
if( theHref && location.href.replace(/#.*/,'') != theHref ) return;
var $target = _hash === '' ? $('body') : $( hash + ', a[name="'+ _hash +'"]').first();
if( ! $target.length ) return;
e.preventDefault();
$('html, body').stop().animate({ scrollTop: $target.offset().top - 0 }, 600, 'swing', function(){
window.location.hash = hash;
});
});
});
}



// var target = $('.skills-item');
// var targetPos = target.offset().top;
// var winHeight = $(window).height();
// var scrollToElem = targetPos - winHeight;
// $(window).scroll(function(){
//   var winScrollTop = $(this).scrollTop();
//   console.log(winScrollTop);
//   if(winScrollTop > scrollToElem){
//
//     $(".skills-item").addClass("fadeInUp");
//   }
//   else {
//     $(".skills-item").removeClass("fadeInUp");
//   }
// });


if ($('.section').hasClass("active")) {
  $(".skills-item").addClass("animated fadeInUp");
}



// MENU POPUP
$(function () {
  $('#menu-btn, .mob-nav').click(function(){
    $('.mob-nav').toggleClass('menu_opened');
    $('#menu-btn').toggleClass('display-opas');
  })
  $('close-btn').click(function(event) {
      if ($(event.target).closest("#menu-btn").length ) return;
      $('.mob-nav').removeClass('menu_opened');
      $('#menu-btn').removeClass('display-opas');
      event.stopPropagation();
  });
});
