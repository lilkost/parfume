const basketJs = () => {
    const itemsControll = document.querySelectorAll('.basket-order__item-prices-controll');
    const giftsControll = document.querySelectorAll('.basket-gift__item-prices-controll');
    const itemButtonsFav = document.querySelectorAll('.basket-order__item-button')
    const giftButtonsFav = document.querySelectorAll('.basket-gift__item-controll-btn');
    const arrButtons = [itemButtonsFav, giftButtonsFav];

    const setCount = (btnMinus, btnPlus, countNode, item) => {
        btnPlus.addEventListener('click', ()=> {
            let count = Number(item.getAttribute('data-count'));
            count+=1;
            item.setAttribute('data-count', count);
            countNode.innerHTML = count;
            btnMinus.classList.remove('prices-btn_disabled');
        });

        btnMinus.addEventListener('click', ()=> {
            let count = Number(item.getAttribute('data-count'));
            count-=1;
            
            if(count === 1) {
                btnMinus.classList.add('prices-btn_disabled');
            }

            if(count < 1) return;

            item.setAttribute('data-count', count);
            countNode.innerHTML = count;
        });
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    itemsControll.forEach(item=> {
        const btnMinus = item.querySelector('.basket-order__item-prices-btn_minus');
        const btnPlus = item.querySelector('.basket-order__item-prices-btn_plus');
        const countNode = item.querySelector('.basket-order__item-prices-count');

        setCount(btnMinus, btnPlus, countNode, item);
    });

    giftsControll.forEach(item=> {
        const btnMinus = item.querySelector('.basket-gift__item-prices-btn-minus');
        const btnPlus = item.querySelector('.basket-gift__item-prices-btn-plus');
        const countNode = item.querySelector('.basket-gift__item-prices-count');

        setCount(btnMinus, btnPlus, countNode, item);
    });

    arrButtons.forEach(arr=> {
        arr.forEach(btn=>{
            btn.addEventListener('click', ()=> {
                btn.classList.toggle('is-active');
            })
        })
    });

    if(document.querySelector('.basket-order__aside-item-bals')) {
        const input = document.querySelector('.basket-order__aside-item-bals input');
        const price = document.querySelector('.basket-order__aside-result-item-price');
        const parent = document.querySelector('.basket-order__aside');
        const text = document.querySelector('.basket-order__aside-item-bals-text');

        const currentPrice = Number(parent.getAttribute('data-price'));
        const currentBals = Number(parent.getAttribute('data-bals'));

        input.addEventListener('click', ()=> {
            if(input.checked) {
                text.innerHTML = '0 б';
                price.innerHTML = numberWithSpaces(currentPrice - currentBals) + ' ₽';
            }
            else {
                text.innerHTML = `${currentBals} б`;
                price.innerHTML = numberWithSpaces(currentPrice) + ' ₽';
            }
        });
    }
}
export default basketJs;