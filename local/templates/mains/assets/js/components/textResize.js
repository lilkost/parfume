const textResize = () => {

    const changeResize = (text) => {
        const textDesk = text.getAttribute('data-text-des');
        const textMob = text.getAttribute('data-text-mob');

        if(window.innerWidth > 480) {
            text.innerHTML = textDesk
        }else {
            text.innerHTML = textMob;
        }
    }

    if(document.querySelector('.personal-account__bonus-conditions-accordion-number')) {
        const numbers = document.querySelectorAll('.personal-account__bonus-conditions-accordion-number');

        const forItems = () => {
            numbers.forEach(itm => {
                changeResize(itm)
            });
        }
        forItems();

        window.addEventListener("resize", ()=> forItems());
    }

    if(document.querySelector('.basket-order__aside-button')) {
        const button = document.querySelector('.basket-order__aside-button');

        changeResize(button)

        window.addEventListener('resize', ()=> changeResize(button));
    }
}

export default textResize;