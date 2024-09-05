const createSlider = () => {
    const sliderTop = new Swiper('.slider-top', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 1,
        spaceBetween: 10,
        dynamicBullets: true,
        pagination: {
            el: '.slider-top-pagination',
            dynamicBullets: true,
            clickable: true
        },

        navigation: {
            nextEl: '.slider-top-button-next',
            prevEl: '.slider-top-button-prev',
        },

        breakpoints: {
            993: {
                loop: false,
            },
            280: {
                loop: true
            }
        }

    });

    window.addEventListener('resize', ()=> {
        resizeSliderSales()
    })

    const newsSliderMainPage = new Swiper('.news-slider', {
        direction: 'horizontal',
        loop: true,

        slidesPerView: 3,
        spaceBetween: 10,
        dynamicBullets: true,

        breakpoints: {
            1301: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1150: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            768:{
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            625:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            280:{
                spaceBetween: 10,
                slidesPerView: 1.4
            }
        }
    });

    // sale slider
    resizeSliderSales();
    
    function resizeSliderSales () {
        if(document.documentElement.clientWidth <=992){
            document.querySelectorAll('.sales__item').forEach(itm=> {
                itm.classList.remove('salse__item_width')
            })
            document.querySelectorAll('.news__slide-js ').forEach(itm=> {
                itm.classList.remove('news__slide-js_width')
            })
        }
        else{
            document.querySelectorAll('.sales__item').forEach(itm=> {
                itm.classList.add('salse__item_width')
            })
            document.querySelectorAll('.news__slide-js ').forEach(itm=> {
                itm.classList.add('news__slide-js_width')
            })
        }
    }

    const sliderSale = new Swiper('.sales__list', {
        direction: 'horizontal',
        loop: false,
        slidesPerView: 3,
        spaceBetween: 0,

        pagination: {
            el: '.sales-pagination',
        },

        breakpoints: {
            993: {
                slidesPerView: 3,
                spaceBetween: 0,
                loop: true,
                centeredSlides: false,
            },
            560: {
                slidesPerView: 2,
                spaceBetween: 20,
                loop: true,
                centeredSlides: false,
            },
            280: {
                slidesPerView: 1.44,
                spaceBetween: 20,
                loop: true,
                centeredSlides: true,
            }
        }
    });

    if(document.querySelector('.sales__list .swiper-wrapper')) {
        const node = document.querySelector('.sales__list .swiper-wrapper').innerHTML

        if(document.documentElement.offsetWidth <= 480) {
            document.querySelector('.sales__list .swiper-wrapper').innerHTML = document.querySelector('.sales__list .swiper-wrapper').innerHTML + node
            sliderSale.update();
        }
        else {
            document.querySelector('.sales__list .swiper-wrapper').innerHTML =  ''
            document.querySelector('.sales__list .swiper-wrapper').innerHTML = node
        }
    
        window.addEventListener('resize', ()=> {
            if(document.documentElement.offsetWidth <= 480) {
                document.querySelector('.sales__list .swiper-wrapper').innerHTML = document.querySelector('.sales__list .swiper-wrapper').innerHTML + node
                sliderSale.update();
            }
            else {
                document.querySelector('.sales__list .swiper-wrapper').innerHTML =  ''
                document.querySelector('.sales__list .swiper-wrapper').innerHTML = node
            }
        });
    }

    // end sale slider
    const sliderNew = new Swiper('.new-slider', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: '.new-slider-next',
            prevEl: '.new-slider-prev',
        },

        breakpoints: {
            1301: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1150: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            768:{
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            625:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            280:{
                spaceBetween: 10,
                slidesPerView: 1.4
            }
        }
    });

    const sliderBlog = new Swiper('.blog-slider', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: '.blog-slider-next',
            prevEl: '.blog-slider-prev',
        },
        breakpoints: {
            1301: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1150: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 10,
            },

            768:{
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
            625:{
                slidesPerView: 2,
                spaceBetween: 10,
            },
            280:{
                slidesPerView: 1.4,
                spaceBetween: 10,
            }
        }
    })

    const sliderBrands = new Swiper('.slider-brands', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 5,
        spaceBetween: 20,

        navigation: {
            nextEl: '.slider-brands-next',
            prevEl: '.slider-brands-prev',
        },
        breakpoints: {
            1301: {
                slidesPerView: 5,
                spaceBetween: 20,
            },
            1101:{
                slidesPerView: 4,
                spaceBetween: 20,
            },
            992:{
                slidesPerView: 3,
                spaceBetween: 10
            },
            561:{
                slidesPerView: 5,
                spaceBetween: 10
            },
            350:{
                slidesPerView: 4.3,
                spaceBetween: 10
            },
            280:{
                slidesPerView: 4.1,
                spaceBetween: 10
            }
        }
    });

    const besselerSlider = new Swiper('.bestseller-slider', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: '.bestseller-slider-next',
            prevEl: '.bestseller-slider-prev',
        },
        breakpoints: {
            1301: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1150: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },

            768:{
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            625:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            280:{
                spaceBetween: 10,
                slidesPerView: 1.4
            }
        }
    });

    const recomendSlider = new Swiper('.recommend-slider', {
        direction: 'horizontal',
        loop: false,

        slidesPerView: 4,
        spaceBetween: 20,

        navigation: {
            nextEl: '.recommend-slider-next',
            prevEl: '.recommend-slider-prev',
        },
        breakpoints: {
            1301: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            1150: {
                slidesPerView: 3.5,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            768:{
                slidesPerView: 2.5,
                spaceBetween: 20,
            },
            625:{
                slidesPerView: 2,
                spaceBetween: 20,
            },
            280:{
                spaceBetween: 10,
                slidesPerView: 1.4
            }
        }
    });

    const advantagesSlider = new Swiper('.advantages__list', {
        direction: 'horizontal',
        loop: false,
        allowTouchMove: false,
        slidesPerView: 'auto',
        spaceBetween: 10,
        centeredSlides: false,
        breakpoints: {
            993:{
                slidesPerView: 'auto',
                allowTouchMove: false,
                centeredSlides: false,
                spaceBetween: 10,
                loop: false,
            },
            280:{
                slidesPerView: 3,
                slidesPerView: 1.4448,
                allowTouchMove: true,
                centeredSlides: true,
                spaceBetween: 20,
                loop: true,
            }
        }
    });

    if(document.querySelector('.advantages__list .swiper-wrapper')) {
        const nodeAdvantage = document.querySelector('.advantages__list .swiper-wrapper').innerHTML

        if(document.documentElement.offsetWidth <= 460) {
            document.querySelector('.advantages__list .swiper-wrapper').innerHTML = document.querySelector('.advantages__list .swiper-wrapper').innerHTML + nodeAdvantage
            advantagesSlider.update();
        }
        else {
            document.querySelector('.advantages__list .swiper-wrapper').innerHTML =  ''
            document.querySelector('.advantages__list .swiper-wrapper').innerHTML = nodeAdvantage
        }
    
        window.addEventListener('resize', ()=> {
            if(document.documentElement.offsetWidth <= 460) {
                document.querySelector('.advantages__list .swiper-wrapper').innerHTML = document.querySelector('.advantages__list .swiper-wrapper').innerHTML + nodeAdvantage
                advantagesSlider.update();
            }
            else {
                document.querySelector('.advantages__list .swiper-wrapper').innerHTML =  ''
                document.querySelector('.advantages__list .swiper-wrapper').innerHTML = nodeAdvantage
            }
        });
    }

    if(document.querySelector('.detail__slider')) {
        var detailSliderThumbs = new Swiper(".detail__slider-min", {
            spaceBetween: 24,
            slidesPerView: 3,
            freeMode: true,
            watchSlidesProgress: true,
        });
        
        var detailBigSlider = new Swiper(".detail__slider-big", {
            spaceBetween: 0,
            navigation: {
                nextEl: ".detail__slider-btn-next",
                prevEl: ".detail__slider-btn-prev",
            },
            thumbs: {
                swiper: detailSliderThumbs,
            },
            pagination: {
                el: ".detail__slider-big-pagination"
            },

        });
    }

    if(document.querySelector('.reviews__slider')) {
        const swiper = new Swiper('.reviews__slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: false,
            slidesPerView: 2,
            spaceBetween: 20,
            // Navigation arrows
            navigation: {
                nextEl: '.reviews__slider-btn-next',
                prevEl: '.reviews__slider-btn-prev',
            },
            breakpoints: {
                651: {
                    slidesPerView: 2,
                },
                280: {
                    slidesPerView: 1.38,
                    spaceBetween: 10,
                }
            }
        });
    }

    if(document.querySelector('.personal-account__comparison-slider')) {
        const sliderComparision = new Swiper('.personal-account__comparison-slider', {
            direction: 'horizontal',
            loop: false,
    
            slidesPerView: 4,
            spaceBetween: 20,
    
            navigation: {
                nextEl: '.personal-account__comparison-slider-button',
            },
        });
    }
    if(document.querySelector('.order__pay-slider')) {
        const sliderComparision = new Swiper('.order__pay-slider', {
            direction: 'horizontal',
            loop: false,
    
            slidesPerView: 4,
            spaceBetween: 20,
    
            navigation: {
                nextEl: '.order__pay-slider-button',
            },
        });
    }
}

export default createSlider;