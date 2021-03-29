export const scroll = () => {
    $(".header__links").on("click","p", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        let id  = $(this).attr('href'),

            // находим высоту, на которой расположен блок
            top = $(id).offset().top;

        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
};