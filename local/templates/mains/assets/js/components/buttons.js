const buttonsPointer = () => {
    const alignButtons = document.querySelectorAll('.aling-bottom-btn');
    const favoritesBtn = document.querySelectorAll('.favorites-btn');
    const buttonsBusket = document.querySelectorAll('.slide__btn-basket');
    const detailButtons = document.querySelectorAll('.detail__controlls-btn');
    const addToBasketDetail = document.querySelector('.detail__price-btn-add-basket');
    const countsDetail = document.querySelector('.detail__price-count-box');
    const detailFilter = document.querySelectorAll('.detail__information-el-label');
    const openDescription = document.querySelector('.detail__dropdown-body-text-btn');
    const changeUserDataBtn = document.querySelector('.order__content-item')

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
        const controlssParent = document.querySelector('.detail__price-controlls');
        addToBasketDetail.addEventListener('click', ()=> {
            if(window.innerWidth > 480) {
                if(addToBasketDetail.classList.contains('is-active')) {
                    addToBasketDetail.innerHTML = 'В корзину';
                }
                else {
                    addToBasketDetail.innerHTML = 'В корзине';
                }
    
                addToBasketDetail.classList.toggle('is-active');
            } else {
                if(addToBasketDetail.classList.contains('is-active')) {
                    addToBasketDetail.innerHTML = 'В корзину';
                    controlssParent.classList.remove('is-basket');
                }
                else {
                    addToBasketDetail.innerHTML = `
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.97321 9.8398C4.05671 8.8007 4.92433 8 5.96678 8H18.0254C19.0678 8 19.9354 8.8007 20.0189 9.8398L20.8225 19.8398C20.916 21.0038 19.9967 22 18.8289 22H5.16321C3.99548 22 3.0761 21.0038 3.16964 19.8398L3.97321 9.8398Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15.9961 11V6C15.9961 3.79086 14.2052 2 11.9961 2C9.78695 2 7.99609 3.79086 7.99609 6V11" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <span>В корзине</span>
                    `;
                    controlssParent.classList.add('is-basket');
                }
                addToBasketDetail.classList.toggle('is-active');
            }

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

    if(openDescription) {
        const textDescription = document.querySelector('.detail__dropdown-body-text');

        const text = {
            old: 'Читать все описание',
            newText: 'Скрыть описание'
        }

        openDescription.addEventListener("click", ()=> {
            if(textDescription.classList.contains('is-open')) {
                openDescription.innerHTML = text.old;
                textDescription.classList.remove('is-open');
            }
            else {
                openDescription.innerHTML = text.newText;
                textDescription.classList.add('is-open');
            }
        });
    }

    if(changeUserDataBtn) {
        const inputs = document.querySelectorAll('.order__user-info-item input');

        changeUserDataBtn.addEventListener("click", ()=> {
            inputs.forEach((inp, key)=> {
                inp.disabled = false;
            });
        });
    }
}

export default buttonsPointer;