$(document).ready(function () {
    function updateCarousel1() {
        let height = $(window).height() -
            $('nav').outerHeight(true) -
            $('.jumbotron').css('padding-top') -
            $('.jumbotron > .container').outerHeight(true);

        $('.jumbotron .carousel-item').css('height', height);

    }

    $(window).resize(updateCarousel1);

    updateCarousel1();
});