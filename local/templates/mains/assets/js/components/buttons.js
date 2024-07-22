const buttonsPointer = () => {
    const alignButtons = document.querySelectorAll('.aling-bottom-btn');
    const favoritesBtn = document.querySelectorAll('.favorites-btn');
    const buttonsBusket = document.querySelectorAll('.slide__btn-basket');

    const addClass = (element, className) => {
        element.classList.add(className)
    }

    if(alignButtons) {
        alignButtons.forEach(element => {
            element.addEventListener('click', ()=> addClass(element, 'is-active'))
        });
    }

    if(favoritesBtn) {
        favoritesBtn.forEach(element => {
            element.addEventListener('click', ()=> {
                element.addEventListener('click', ()=> addClass(element, 'is-active'))
            })
        });
    }

    if(buttonsBusket) {
        buttonsBusket.forEach(element => {
            element.addEventListener('click', ()=> {
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