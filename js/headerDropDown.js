export const headerDropDown = () => {
    $('.header__name').click(function() {
        if($('.header__nav').hasClass('one')) {
            $('.header__name').not($(this)).removeClass('active');
            $('.header__elements').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().stop().slideToggle(300);
    })
}