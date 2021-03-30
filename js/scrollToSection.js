
export const scrollSections = () => {
  const $headerLinks = $('.js-anchor-link');
  const $sections = $('.js-scroll-section');
  const windowScrollPosition = $(window).scrollTop();
  const activeClass = 'active';

  $sections.each(function() {
    const $section = $(this);
    const sectionID = $section.attr('id');
    const sectionOffsetTop = $section.offset().top;

    if( sectionOffsetTop - 1 < windowScrollPosition ){

      $headerLinks.removeClass(activeClass)
      $('a[href="#'+ sectionID + '"]').addClass(activeClass);

    }
  })
}
export const scrollElements = () =>  {
  $('.header__name').click(function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
    return false;
  });
}