$(document).ready(function () {

    $(".main-nav-toggle").click(
        function () {
            $('.main-nav').toggleClass("menu-visible");
        }
    );

    $('.slider').slick({
        prevArrow: '<div data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"><span><svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg></span></div>',
        nextArrow: '<div data-role="none" class="slick-next" aria-label="Next" tabindex="0"><span><svg class="arrow"><use xlink:href="img/sprite.svg#arrow"></use></svg></span></div>'
    });
});
