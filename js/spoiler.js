$(document).ready(function() {
    slider();
    headerSlider();
    burger();
});

function slider(){
    $('.questions__question').click(function (event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
}

function headerSlider() {
    $('.header__name').click(function(event) {
        if($('.header__nav').hasClass('one')) {
            $('.header__name').not($(this)).removeClass('active');
            $('.header__elements').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    })
}

function burger() {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__nav').toggleClass('active');
        $('body').toggleClass('lock');
    })
}