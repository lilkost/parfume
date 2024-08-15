const dropDown = ()=> {

    if(document.querySelectorAll('.modal-catalog__item')) {
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

    if(document.querySelector('.modal-card__dropdown')) {
        const dropDownTop = document.querySelector('.modal-card__dropdown-top');
        const dropDownBody = document.querySelector('.modal-card__dropdown-body');

        dropDownTop.addEventListener('click', ()=> {
            dropDownBody.classList.toggle('is-open');
            dropDownTop.classList.toggle('is-open');
        })
    }

    if(document.querySelector('.catalog__aside-accordion')){
        const accordions = document.querySelectorAll('.catalog__aside-accordion');
        
        accordions.forEach(accordion=> {
            const accordionTop = accordion.querySelector('.catalog__aside-accordion-top');

            accordionTop.addEventListener('click', ()=> {
                if(window.innerWidth > 480){
                    accordion.classList.toggle('catalog__aside-accordion_hidden');
                    accordionTop.classList.toggle('is-open');
                }
            });
        })
    }
}
export default dropDown;