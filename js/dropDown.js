export const dropDown = () => {
    $('.questions__question').click(function () {
        $(this).toggleClass('active').next().stop().slideToggle(300);
    });
}