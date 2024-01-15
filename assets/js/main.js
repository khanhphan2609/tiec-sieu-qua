$(document).ready(function () {
    // The le
    $(document).on('click', '.modal-guide', function() {
        DialogGuide();
    });
    // History
    $('.menu__list').on('click', '.history', function() {
        AskToLogIn();
    });
    // Doi qua
    var targetOffset = $('.get-gifts').offset().top * .9;
    $('.menu__list').on('click', '.scroll-to-gift', function () {
        ScrollToGift(targetOffset);
    });
    // Them luot
    $('.more-turns').on('click', '.more-turns__item', function () {
        AskToLogIn();
    });
    // Get gifts
    $('.get-gifts').on('click', 'a', function () {
        AskToLogIn();
    });
});



// Modal
function DialogGuide() {
    $('#dialogGuide').modal('toggle');
};

function DialogCharts() {
    $('#dialogCharts').modal('toggle');
};

// Scroll
function ScrollToGift(targetOffset) {
    $('html, body').animate({
        scrollTop: targetOffset
    }, 100);
}

// SweetAlert
function AskToLogIn() {
    swal("Vui lòng đăng nhập!");
}