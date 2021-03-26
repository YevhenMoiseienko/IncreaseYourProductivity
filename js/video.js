
export const startVideo = () => {
    $('.card-deck a').fancybox({
        caption : function( instance, item ) {
            return $(this).parent().find('.card-text').html();
        }
    });
}