const createSlider = () => {
    const sliderMain = new Swiper('.slider', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3.6,
        spaceBetween: 30,
        autoHeight: true,
        pagination: {
            el: '.slider-pagination',
        },

        navigation: {
            nextEl: '.slider-button-next',
            prevEl: '.slider-button-prev',
        },

        breakpoints:{
            1441: {
                slidesPerView: 3.8
            },
            1440:{
                slidesPerView: 3.259
            },
            1231: {
                slidesPerView: 3.3,
                spaceBetween: 30,
            },
            993: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            930: {
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            568:{
                slidesPerView: 1.5,
                spaceBetween: 20,
            },
            280: {
                slidesPerView: 1,
                spaceBetween: 20,
            }
        }

    });
}

export default createSlider;