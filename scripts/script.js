openActiveMenu()

//Маска для телефона
$('input[name=phone]').mask("8 (999) 999-99-99").on('click', function(){
    $(this).focus()
})


// Аккордеон
function openActiveMenu () {
    active_menu = $('.sublink.active')
    if( active_menu ){
        active_menu.next().css("max-height", active_menu.next().prop("scrollHeight"))
    }
}

$('.sublink').on("click", function() {
    $(this).toggleClass("active")
    content = $(this).next()

    if (content.height() > 0) {
        content.css("max-height", 0);
    } else {
        content.css("max-height", content.prop("scrollHeight"));
    }
});


// Слайдер
// $('section.banner .list').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     infinite: false,
//     appendArrows: $('section.banner .arrows'),
//     prevArrow: $('section.banner .left_arrow'),
//     nextArrow: $('section.banner .right_arrow'),
//     dots: true,
//     appendDots: $('section.banner .dots'),
// })


$('[target-modal=order]').on('click', function() {
    title = $(this).data('title')
    image = $(this).data('image')
    $('[modal=order] h2 span').text(title)
    $('[modal=order] img').attr('src', image)
    $('[modal=order]').find('input[name=product]').val(title)
})


$(document).on('keyup', '[modal=search] input[type=text]', function() {
    content = $('.search_products')
    if( $(this).val().length >= 3 ) {
        $(this).parent().addClass('active')
        content.css("max-height", content.prop("scrollHeight"))
        content.addClass('active')
    } else {
        $(this).parent().removeClass('active')
        content = $('.search_products')
        content.css("max-height", 0)
        content.removeClass('active')
    }
})



