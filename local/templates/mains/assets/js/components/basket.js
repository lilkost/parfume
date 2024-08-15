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
    })
}
export default basketJs;