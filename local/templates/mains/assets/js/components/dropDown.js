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

    if(document.querySelector('.detail__dropdown-top-item')) {
        const links = document.querySelectorAll('.detail__dropdown-top-item a');
        const bodys = document.querySelectorAll('.detail__dropdown-contents-item');
        const dropDownItem = document.querySelectorAll('.detail__dropdown-contents-item');

        links.forEach(link=> {
            link.addEventListener('click', (e)=> {
                e.stopPropagation();
                e.preventDefault();
                const href = link.getAttribute('data-id');

                links.forEach(lk=> {
                    const parent = lk.closest('.detail__dropdown-top-item');
                    parent.classList.remove('is-active')
                })

                link.closest('.detail__dropdown-top-item').classList.add('is-active');
                bodys.forEach(bd=> {
                    bd.classList.remove('is-active');

                    if(bd.id === href) {
                        bd.classList.add('is-active');
                    }
                })
            });
        });

        dropDownItem.forEach((item)=> {
            const top = item.querySelector('.detail__dropdown-top-mobile');

            if(top) {
                top.addEventListener("click", ()=> {
                    item.classList.toggle('is-active');
                });
            }
        });
    }
    
    if(document.querySelector('.personal-account__bonus-conditions-accordion')) {
        const accordions = document.querySelectorAll('.personal-account__bonus-conditions-accordion');

        accordions.forEach(accordion=> {
            const btn = accordion.querySelector('.personal-account__bonus-conditions-accordion-btn');

            btn.addEventListener('click', ()=> {
                accordion.classList.toggle('is-active');
            });
        });
    }

    if(document.querySelector('.personal-account__bonus-accordion')) {
        const top = document.querySelector('.personal-account__bonus-accordion-top');
        const accordion = document.querySelector('.personal-account__bonus-accordion');

        top.addEventListener('click', ()=>{
            accordion.classList.toggle('is-active');
        });
    }

    if(document.querySelector('.personal-account__help-accordion')) {
        const accordions = document.querySelectorAll('.personal-account__help-accordion');
        
        accordions.forEach(accordion=> {
            const top = accordion.querySelector('.personal-account__help-accordion-top .personal-account__help-accordion-top-btn');

            top.addEventListener("click", ()=> {
                accordion.classList.toggle('is-active');
            });
        });
    }

    if(document.querySelector('.order__accordion')) {
        const accordions = document.querySelectorAll('.order__accordion');

        accordions.forEach(accordion=> {
            const buttonOpen = accordion.querySelector('.order__accordion-top');
            
            buttonOpen.addEventListener('click', ()=> {
                accordions.forEach(acc=> {
                    acc.classList.remove('is-active');
                });
                
                accordion.classList.toggle('is-active');
            });
        });
    }
}
export default dropDown;