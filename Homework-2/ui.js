var $ = window.jQuery;

$(document).ready(() => {

    $('#confetti').hide();

    $('button').on('click', (e) => {
        $('#confetti').show();
        $(document).trigger('confetti');
    });
});
