export const initSlider = () => {
    $('.resources__slider').slick({
        dots: true
    });
    $('.top__sliders').slick({
        dots: true,
        arrows: false,
    });
    $('.quotes__slider').slick({
        dots: true,
        arrows: false,
    })

}