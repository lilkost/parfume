const dropdown = () => {
    if(document.querySelectorAll('.dropdown__item')) {
        const itemsNode = document.querySelectorAll('.dropdown__item');
    
        const toggleActiveClass = (itemCurrent) => {
            if(itemCurrent.classList.contains('is-open')) {
                itemCurrent.classList.remove('is-open');
            }else {
                itemCurrent.classList.add('is-open');
            }
        }
    
        itemsNode.forEach(item=> {
            const itemTop = item.querySelector('.dropdown__item-top');
            itemTop.addEventListener('click', ()=> toggleActiveClass(item));
        });
    }

    if(document.querySelector('.header__dropdown')) {
        const dropdownHeader = document.querySelector('.header__dropdown');
        const openModalNode = document.querySelector('.header__dropdown-title');

        const toggleOpen = () => {
            dropdownHeader.classList.toggle('is-open');
        }

        openModalNode.addEventListener('click', ()=> {
            if(window.innerWidth <= 768) {
                toggleOpen();
            }
        })
    }
}

export default dropdown;