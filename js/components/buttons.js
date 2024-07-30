const buttonsPointer = () => {
    const alignButtons = document.querySelectorAll('.aling-bottom-btn');
    const favoritesBtn = document.querySelectorAll('.favorites-btn');
    const buttonsBusket = document.querySelectorAll('.slide__btn-basket');

    const addClass = (e, element, className) => {
        e.preventDefault();
        e.stopPropagation()
        element.classList.add(className)
    }

    if(alignButtons) {
        alignButtons.forEach(element => {
            element.addEventListener('click', (e)=> addClass(e,element, 'is-active'))
        });
    }

    if(favoritesBtn) {
        favoritesBtn.forEach(element => {
            element.addEventListener('click', (e)=> addClass(e, element, 'is-active'))
        });
    }

    if(buttonsBusket) {
        buttonsBusket.forEach(element => {
            element.addEventListener('click', (e)=> {
                const parent = element.closest('.slide')
                e.preventDefault();
                e.stopPropagation()
                if(element.classList.contains('is-active')) return;
                
                element.classList.add('is-active')
                const textNode = document.createElement('span');
                textNode.innerHTML = 'В корзине'
                element.append(textNode)
            })
        });
    }
}

export default buttonsPointer;