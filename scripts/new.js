let sliderTabs = new Swiper('section.promo div.swiper.tabs_captions', {
    slidesPerView: 'auto',
    freeMode: true
})

new Swiper('section.promo div.swiper.tabs_contents', {
    thumbs: {
        swiper: sliderTabs,
        autoScrollOffset: .5
    },
    navigation: {
        prevEl: document.querySelector('section.promo div.arrow:first-child'),
        nextEl: document.querySelector('section.promo div.arrow:last-child')
    }
})
