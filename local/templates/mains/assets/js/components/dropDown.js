const dropDown = ()=> {
    const items = document.querySelectorAll('.modal-catalog__item');
    const dropItems = document.querySelectorAll('.modal-catalog__drop');
    const modalBackCatalog = document.querySelector('.modal-catalog__btn-close');

    items.forEach(element => {
        element.addEventListener('click', ()=> {
            items.forEach(el=> {
                el.classList.remove('is-active')
            });

            element.classList.add('is-active');

            const id = element.getAttribute('data-id');

            if(!id) return;

            dropItems.forEach(itm=> {
                itm.classList.remove('is-active');

                if(itm.id === id) {
                    itm.classList.add('is-active')
                }
            });
            
            if(window.innerWidth <= 400) {
                setTimeout(()=>{
                    modalBackCatalog.style.display = 'flex';
                },300);
            }
        })
    });
}

export default dropDown;