$(function() {
    let header = $('#header');
    let intro = $('#intro');
    let introHeight = intro.innerHeight();
    let scrollPos = $(window).scrollTop();
    let nav = $('#nav');

    checkScroll(scrollPos, introHeight);

    $(window).on("scroll resize", function() {
      introHeight = intro.innerHeight();
      scrollPos = $(this).scrollTop();
  
      checkScroll(scrollPos, introHeight);
    });
      
      function checkScroll(scrollPos, introHeight){
      if (scrollPos > introHeight) {
        header.addClass("fixed");
      } else {
        header.removeClass("fixed");
      }
    }
  
    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
      event.preventDefault();
  
      let elementId = $(this).data("scroll");
      let elementOffset = $(elementId).offset().top;
      nav.removeClass("active");
  
      $("html, body").animate(
        {
          scrollTop: elementOffset - -10
        },
        700
      );
    });
  
$('.burger').click(function(e){
  $('.burger,.header-nav__menu').toggleClass('active');
  $('body').toggleClass('lock');
});


















});