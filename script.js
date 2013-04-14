$(function(){
  $('.blog').on('click', 'button.more', function(){
      $(this).removeClass('more');
      $(this).siblings('.hidden').slideDown();
      $(this).html('read less').addClass('less');
    });
  $('.blog').on('click', 'button.less', function(){
    $(this).removeClass('less');
    $(this).siblings('.hidden').slideUp();
    $(this).html('read more').addClass('more');
  });
});