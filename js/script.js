$('.counterup').counterUp({
    delay: 10,
    time: 1000
});

$(function(){
    $('.reviewslider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        prevArrow: "<i class='fa-solid fa-angle-left left'></i>",
        nextArrow: "<i class='fa-solid fa-angle-right right'></i>"
      });
})

$(window).scroll(function(){
    if($(window).scrollTop() > 100){
        $('.navbar').addClass('scrollbar')
    }
    else{
        $('.navbar').removeClass('scrollbar')
    }


})
function scrolltotop() {
    $('html,body').animate({scrollTop: 0}, 500)
}
$(window).on('scroll', function(){
    if($(window).scrollTop() > 500){
        $('.scrolltopbutton').fadeIn(300)
    }
    else{
        $('.scrolltopbutton').fadeOut(300)
    }

})