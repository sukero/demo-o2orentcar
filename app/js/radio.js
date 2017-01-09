$(function () {
  FastClick.attach(document.body);
  $('.contact-category li').click(function () {
    $(this).children('.contact-category-radio-wrapper').addClass('on').parents().siblings().children('.contact-category-radio-wrapper').removeClass('on');
  });
});
