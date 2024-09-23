const textResize = () => {
    if(document.querySelector('.personal-account__bonus-conditions-accordion-number')) {
        const numbers = document.querySelectorAll('.personal-account__bonus-conditions-accordion-number');

        const changeResize = () => {
            numbers.forEach(num=> {
                const textDesk = num.getAttribute('data-text-des');
                const textMob = num.getAttribute('data-text-mob');

                if(window.innerWidth > 480) {
                    num.innerHTML = textDesk
                }else {
                    num.innerHTML = textMob;
                }
            })
        }

        changeResize();

        window.addEventListener("resize", ()=> changeResize());
    }
}

export default textResize;