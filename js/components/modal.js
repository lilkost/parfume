const modal = () => {
    if(document.querySelector('.modal-register') && document.getElementById('registerOpenModal')) {
        const registerOpenModal = document.getElementById('registerOpenModal');
        const mobileRegisterOpenModal = document.querySelector('.buttons-mobile__open-modal-register');
        const modalRegister = document.querySelector('.modal-register');
        const modalClose  = document.querySelector('.modal-register__btn-close');
        const modalInner = document.querySelector('.modal-register__inner');

        registerOpenModal.addEventListener('click', ()=> {
            modalRegister.classList.add('is-open');
            setTimeout(()=>{
                modalInner.classList.add('is-open')
            },100);
        });

        mobileRegisterOpenModal.addEventListener('click', ()=>{
            modalRegister.classList.add('is-open');
            setTimeout(()=>{
                modalInner.classList.add('is-open')
            },100);
        })

        modalClose.addEventListener('click', ()=> {
            modalRegister.classList.remove('is-open');
            setTimeout(()=>{
                modalInner.classList.remove('is-open')
            },100);
        })

        window.addEventListener('click', (e)=> {
            if(e.target === modalRegister) {
                modalRegister.classList.remove('is-open')
                setTimeout(()=> {
                    modalInner.classList.remove('is-open')
                },100)
            }
        })

        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                modalRegister.classList.remove('is-open')
                setTimeout(()=> {
                    modalInner.classList.remove('is-open')
                },100)
            }
        });

    }
    
    if(document.querySelector('.modal-catalog')) {
        const modalBth = document.querySelector('.header__catalog-btn');
        const modal  = document.querySelector('.modal-catalog');
        const modalBackCatalog = document.querySelector('.modal-catalog__btn-close');
        const modalCloseBtn = document.querySelector('.modal-catalog__btn-close-modal');
        const items = document.querySelectorAll('.modal-catalog__item');
        const dropItems = document.querySelectorAll('.modal-catalog__drop');

        const isCloseHTML = `
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1693 14.1663L5.83594 5.83302M14.1693 5.83301L5.83595 14.1663" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>Каталог продукции</span>
        `;
        const isActiveHTML = `
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2.5H3.83333C3.3731 2.5 3 2.8731 3 3.33333V7.5C3 7.96024 3.3731 8.33333 3.83333 8.33333H8C8.46024 8.33333 8.83333 7.96024 8.83333 7.5V3.33333C8.83333 2.8731 8.46024 2.5 8 2.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8 11.6666H3.83333C3.3731 11.6666 3 12.0397 3 12.5V16.6666C3 17.1269 3.3731 17.5 3.83333 17.5H8C8.46024 17.5 8.83333 17.1269 8.83333 16.6666V12.5C8.83333 12.0397 8.46024 11.6666 8 11.6666Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.1666 2.5H13C12.5397 2.5 12.1666 2.8731 12.1666 3.33333V7.5C12.1666 7.96024 12.5397 8.33333 13 8.33333H17.1666C17.6269 8.33333 18 7.96024 18 7.5V3.33333C18 2.8731 17.6269 2.5 17.1666 2.5Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.1666 11.6666H13C12.5397 11.6666 12.1666 12.0397 12.1666 12.5V16.6666C12.1666 17.1269 12.5397 17.5 13 17.5H17.1666C17.6269 17.5 18 17.1269 18 16.6666V12.5C18 12.0397 17.6269 11.6666 17.1666 11.6666Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Каталог продукции</span>
        `;

        const modalLeft = () => {
            let a = document.querySelector('.header__row.header__row_center').getBoundingClientRect().width;
            const paddingLeft = (window.innerWidth - a) / 2;
            modal.style.paddingLeft = `${paddingLeft}px`;
        }

        const addClassIsActive = () => {
            if(window.innerWidth <=400){
                items.forEach(itm=> {
                    itm.classList.remove('is-active');
                })
                dropItems.forEach(itm=> {
                    itm.classList.remove('is-active');
                })
            }
            else {
                items[0].classList.add('is-active');
                dropItems[0].classList.add('is-active');
                
            }
        }

        modalLeft ();
        addClassIsActive();

        window.addEventListener('resize', ()=> {
            modalLeft();
            addClassIsActive();
            modalBackCatalog.style.display = 'none';
        });

        const swiper = new Swiper('.modal-catalog__drop-slider', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            slidesPerView: 4,
            spaceBetween: 14,

            // Navigation arrows
            navigation: {
                nextEl: '.modal-catalog__slider-next',
                prevEl: '.modal-catalog__slider-prev',
            },

            breakpoints: {
                769: {
                    slidesPerView: 4,
                    spaceBetween: 14,
                },
                625: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                569: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                280: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                }
            }
        });
        
        modalBth.addEventListener('click', ()=> {
            modal.classList.toggle('is-open');
            modalBth.classList.toggle('is-active');

            if(modalBth.classList.contains('is-active')) {
                modalBth.innerHTML = isCloseHTML;
                if(window.innerWidth <= 460) {
                    document.querySelector('body').classList.add('is-overflow');
                }
            }else {
                modalBth.innerHTML = isActiveHTML;
                document.querySelector('body').classList.remove('is-overflow');
            }
        });

        modalCloseBtn.addEventListener('click', ()=> {
            modal.classList.remove('is-open');
            modalBth.classList.remove('is-active');

            if(modalBth.classList.contains('is-active')) {
                modalBth.innerHTML = isCloseHTML;
            }else {
                modalBth.innerHTML = isActiveHTML;
            }

            document.querySelector('body').classList.remove('is-overflow');
        });

        modalBackCatalog.addEventListener('click', ()=> {
            modalBackCatalog.style.display = 'none';
            items.forEach(itm=> {
                itm.classList.remove('is-active');
            })
            dropItems.forEach(itm=> {
                itm.classList.remove('is-active');
            })
        });
    } 

    if(document.querySelector('.modal-card') && document.querySelector('.slide__btn-basket')) {
        const basketBtns = document.querySelectorAll('.slide__btn-basket');
        const modal = document.querySelector('.modal-card')
        const modalInner = document.querySelector('.modal-card__inner');
        const modalClose = document.querySelector('.modal-card__btn-close');
        const modalFavorites = document.querySelector('.modal-card__btn-favorites');
        const stars = document.querySelectorAll('.modal-card__stars svg');
        const countNode = document.querySelector('.modal-card__controll-count');
        const btnMinus = document.querySelector('.modal-card__controll-btn_minus');
        const btnPlus = document.querySelector('.modal-card__controll-btn_plus');
        let price  = 0;

        basketBtns.forEach(btn => {
            btn.addEventListener('click', ()=> {
                toggleOpen()
                const parent = btn.closest('.slide')
                if(!parent) return;
                const parentStars = Number(parent.getAttribute('data-stars'));
                
                stars.forEach((item, key) => {
                    if(key < parentStars) {
                        item.classList.add('is-star')
                    }
                });
            });
            
        });

        const toggleOpen = () => {
            modal.classList.toggle('is-open')
            setTimeout(()=> {
                modalInner.classList.toggle('is-open')
            },100)

            if(!modal.classList.contains('is-open')) {
                modalFavorites.classList.remove('is-active');

                stars.forEach(svg=> {
                    svg.classList.remove('is-star');
                })
            }
        }



        modalClose.addEventListener('click', ()=>toggleOpen());

        modalFavorites.addEventListener('click', ()=> {
            modalFavorites.classList.toggle('is-active')
        });

        window.addEventListener('click', (e)=> {
            if(e.target === modal) {
                modal.classList.remove('is-open')
                setTimeout(()=> {
                    modalInner.classList.remove('is-open')
                },100)
            }
        })

        document.addEventListener('keydown', function(e) {
            if( e.keyCode == 27 ){ 
                modal.classList.remove('is-open')
                setTimeout(()=> {
                    modalInner.classList.remove('is-open')
                },100)
            }
        });

        btnPlus.addEventListener('click', ()=> {
            let count = Number(countNode.innerHTML);
            count += 1;
            countNode.innerHTML = count
            if(count > 1) {
                btnMinus.classList.add('is-active')
            }
        });

        btnMinus.addEventListener('click',()=> {
            let count = Number(countNode.innerHTML);
            if(count <=1) return; 
            count -= 1;
            countNode.innerHTML = count
            if(count <= 1) {
                btnMinus.classList.remove('is-active')
            }
        })
    }
}

export default modal;