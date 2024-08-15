const buttonsPointer = () => {
    const alignButtons = document.querySelectorAll('.aling-bottom-btn');
    const favoritesBtn = document.querySelectorAll('.favorites-btn');
    const buttonsBusket = document.querySelectorAll('.slide__btn-basket');
    const detailButtons = document.querySelectorAll('.detail__controlls-btn');
    const addToBasketDetail = document.querySelector('.detail__price-btn-add-basket');
    const countsDetail = document.querySelector('.detail__price-count-box');
    const detailFilter = document.querySelectorAll('.detail__information-el-label');

    const addClass = (e, element, stl,className) => {
        e.preventDefault();
        e.stopPropagation()

        if(stl === 'add') {
            element.classList.add(className)
        }

        if(stl === 'toggle') {
            element.classList.toggle(className)
        }
    }

    if(alignButtons) {
        alignButtons.forEach(element => {
            element.addEventListener('click', (e)=> addClass(e,element, 'add','is-active'))
        });
    }

    if(favoritesBtn) {
        favoritesBtn.forEach(element => {
            element.addEventListener('click', (e)=> addClass(e, element, 'add','is-active'))
        });
    }

    if(buttonsBusket) {
        buttonsBusket.forEach(element => {
            element.addEventListener('click', (e)=> {
                e.preventDefault();
                e.stopPropagation();

                if(element.classList.contains('is-active')) return;
                    element.classList.add('is-active')
                    const textNode = document.createElement('span');
                    textNode.innerHTML = 'В корзине'
                    element.append(textNode)
            })
        });
    }

    if(detailButtons) {
        detailButtons.forEach(btn => {
            btn.addEventListener('click', (e)=> addClass(e, btn, 'toggle' ,'is-active'));
        });
    }

    if(addToBasketDetail){
        addToBasketDetail.addEventListener('click', ()=> {
            if(addToBasketDetail.classList.contains('is-active')) {
                addToBasketDetail.innerHTML = 'В корзину';
            }
            else {
                addToBasketDetail.innerHTML = 'В корзине';
            }

            addToBasketDetail.classList.toggle('is-active');

        });
        
    }

    if(countsDetail) {
        const parent = countsDetail;
        const plus = parent.querySelector(".detail__price-counts-plus");
        const minus = parent.querySelector(".detail__price-counts-minus");
        const countNode = parent.querySelector(".detail__price-count");

        plus.addEventListener('click', ()=> {
            let currentCount = Number(parent.getAttribute('data-count'));
            currentCount+=1;

            if(currentCount > 1) {
                minus.classList.remove('is-disabled')
            }
            parent.setAttribute('data-count', currentCount);
            countNode.innerHTML = currentCount;
        });

        minus.addEventListener('click', ()=> {
            let currentCount = Number(parent.getAttribute('data-count'));
            currentCount-=1;

            if(currentCount <= 1) {
                minus.classList.add('is-disabled')
            }
            
            if(currentCount < 1) return;
            
            parent.setAttribute('data-count', currentCount);
            countNode.innerHTML = currentCount;
        });
    }

    if(detailFilter) {
        detailFilter.forEach(label=> {
            label.addEventListener('click', ()=> {
                const currentFor = label.htmlFor;

                detailFilter.forEach(lb => {
                    if(lb.htmlFor === currentFor) {
                        lb.classList.remove('is-active');
                    }
                });

                label.classList.toggle('is-active');
            });
        });
    }
}

export default buttonsPointer;