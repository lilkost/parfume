const stars = () => {
    const slides = document.querySelectorAll('.slide');

    slides.forEach(slide=> {
        const stars = slide.querySelectorAll('.slide-stars svg');
        const count = Number(slide.getAttribute('data-stars'));

        stars.forEach((item, key) => {
            if(key < count) {
                item.classList.add('is-star')
            }
        });
    });
}

export default stars;