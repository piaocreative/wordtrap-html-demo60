$(document).ready(function(){

    var $slider_container = $('#slick-slider_show');
    $('#slick-slider_show').slick({
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        appendArrows: $slider_container,
        infinite: true,
        // Add FontAwesome Class
          prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
});

$(document).ready(function() {
    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
    
    $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 400
    });  
});