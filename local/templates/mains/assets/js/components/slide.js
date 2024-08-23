const stars = () => {
    const slides = document.querySelectorAll('.slide');
    
    const isStarsCount = (stars, count) => {
        stars.forEach((item, key) => {
            if(key < count) {
                item.classList.add('is-star')
            }
        });
    }

    slides.forEach(slide=> {
        const stars = slide.querySelectorAll('.slide-stars svg');
        const count = Number(slide.getAttribute('data-stars'));
        isStarsCount(stars, count);
    });

    if(document.querySelector('.detail__stars')) {
        const starsParent = document.querySelector('.detail__stars');
        const countStars = Number(starsParent.getAttribute('data-stars'));
        const stars = starsParent.querySelectorAll('svg');
        isStarsCount(stars, countStars);
    }

    if(document.querySelector('.personal-account__comparison-slide-stars')) {
        const starsParent = document.querySelectorAll('.personal-account__comparison-slide');

        starsParent.forEach(slide=> {
            const stars = slide.querySelectorAll('.personal-account__comparison-slide-stars svg');
            const count = Number(slide.querySelector('.personal-account__comparison-slide-stars').getAttribute('data-stars'));
            isStarsCount(stars, count);
        });
    }

    if(document.querySelector('.reviews__slide')) {
        const slidesReview = document.querySelectorAll('.reviews__slide');
        slidesReview.forEach(slide=> {
            const stars = slide.querySelectorAll('.reviews__slide-stars svg');
            const count = Number(slide.querySelector('.reviews__slide-stars').getAttribute('data-stars'));
            isStarsCount(stars, count);
        });
    }

    if(document.querySelector('.reviews__slide-controll')) {
        const slideControlls = document.querySelectorAll('.reviews__slide-controll');

        slideControlls.forEach(el => {
            const buttonOne = el.querySelectorAll('button')[0];
            const buttonTwo = el.querySelectorAll('button')[1];
            
            buttonTwo.addEventListener('click', ()=> {
                if(buttonTwo.classList.contains('is-active')) {
                    buttonTwo.classList.remove('is-active');
                    let count = Number(el.getAttribute('data-count-rev'));
                    count = count - 1;
                    el.setAttribute('data-count-rev', count);
                    buttonTwo.querySelector('span').innerHTML = count;
                }
                else {
                    buttonTwo.classList.add('is-active');
                    let count = Number(el.getAttribute('data-count-rev'));
                    count = count + 1;
                    el.setAttribute('data-count-rev', count);
                    buttonTwo.querySelector('span').innerHTML = count;
                }
                if(buttonOne.classList.contains('is-active')) {
                    buttonOne.classList.remove('is-active');
                    let count = Number(el.getAttribute('data-count-rev-d'));
                    count = count - 1;
                    el.setAttribute('data-count-rev-d', count);
                    buttonOne.querySelector('span').innerHTML = count;
                }
            });

            buttonOne.addEventListener('click', ()=> {
                if(buttonTwo.classList.contains('is-active')) {
                    buttonTwo.classList.remove('is-active');
                    let count = Number(el.getAttribute('data-count-rev'));
                    count = count - 1;
                    el.setAttribute('data-count-rev', count);
                    buttonTwo.querySelector('span').innerHTML = count;
                }

                if(buttonOne.classList.contains('is-active')) {
                    buttonOne.classList.remove('is-active');
                    let count = Number(el.getAttribute('data-count-rev-d'));
                    count = count - 1;
                    el.setAttribute('data-count-rev-d', count);
                    buttonOne.querySelector('span').innerHTML = count;
                }
                else {
                    buttonOne.classList.add('is-active');
                    let count = Number(el.getAttribute('data-count-rev-d'));
                    count = count + 1;
                    el.setAttribute('data-count-rev-d', count);
                    buttonOne.querySelector('span').innerHTML = count;
                }
            })
        });
    }
}

export default stars;