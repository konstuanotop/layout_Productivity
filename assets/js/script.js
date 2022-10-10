$(document).ready(function(){
    $('.blog__slider').slick({
        arrows: true,
        dots: true
    });
    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1
    });

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();

        var $this = $(this),
            blockId =$this.data("collapse");

            $this.toggleClass("active");
    })
});