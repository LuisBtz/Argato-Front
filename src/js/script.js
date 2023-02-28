


$(document).ready(function(){
    $('.ham').on('click', function() {
        $('.nav__container--list').toggleClass('click');
        $('.ham').toggleClass('close');
    })
    
    $('#home .description .description__iz').on('mouseenter', function() {
        $("#home .description .description__iz").addClass('width');
        $("#home .description .description__de").addClass('width0');
    })
    
    $('#home .description .description__iz').on('mouseleave', function() {
        $("#home .description .description__iz").removeClass('width');
        $("#home .description .description__de").removeClass('width0');
    
    })
    
    $('#home .description .description__de').on('mouseenter', function() {
        $("#home .description .description__de").addClass('width');
        $("#home .description .description__iz").addClass('width0');
    })
    
    $('#home .description .description__de').on('mouseleave', function() {
        $("#home .description .description__de").removeClass('width');
        $("#home .description .description__iz").removeClass('width0');
    
    })


    $('#home .slider .mezcales').slick({
        slidesToShow: 1,
        // autoplay: true,
        nextArrow: $('.arrow'),
    });


    $('#home section.ourFarm .texto .texto1').on('mouseenter', function() {
        $('#home section.ourFarm .texto1').addClass('farm1')
        $('#home section.ourFarm .image1').addClass('imagew1')
    })
    $('#home section.ourFarm .texto .texto1').on('mouseleave', function() {
        $('#home section.ourFarm .texto1').removeClass('farm1')
        $('#home section.ourFarm .image1').removeClass('imagew1')
    })


    $('#home section.ourFarm .texto .texto2').on('mouseenter', function() {
        $('#home section.ourFarm .texto2').addClass('farm2')
        $('#home section.ourFarm .image2').addClass('imagew2')
    })
    $('#home section.ourFarm .texto .texto2').on('mouseleave', function() {
        $('#home section.ourFarm .texto2').removeClass('farm2')
        $('#home section.ourFarm .image2').removeClass('imagew2')
    })


    $('#mezcal section.hero .sliderContainer').slick({
        slidesToShow: 1,
        arrows: true,
        nextArrow: $('.arrowRight'),
        prevArrow: $('.arrowLeft'),
    });


    $('#mezcal section.mezcales .cont').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        centerPadding: '100px',
        centerMode: true,
        arrows: false,
        verticalSwiping: true,
        // autoplay: true,
        responsive: [
            {
              breakpoint: 1000,
              settings: {
                arrows: false,
                verticalSwiping: false,
                vertical: false,
                centerPadding: '0',
              }
            },
          ]
    });

    $('#masters section.sliderMasters .container').slick({
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        cssEase: 'linear' 
    });


    $('#masters section.ourPeople .images .image').on('mouseenter', function(){
        $(this).addClass('grande');
    })
    $('#masters section.ourPeople .images .image').on('mouseleave', function(){
        $(this).removeClass('grande');
    })

  });