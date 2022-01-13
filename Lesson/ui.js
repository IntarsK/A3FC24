jQuery(document).ready(() => {
    jQuery('button').on('click', (e) => {
        jQuery(e.target).closest('.info-block').find('.answer').slideToggle();
    });
});