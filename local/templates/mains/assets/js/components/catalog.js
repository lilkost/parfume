const catalog = () => {
    const filterBtnOpen = document.querySelector('.catalog__mobile-fillter-btn-open');
    const fillterButtonsOpenCategory = document.querySelectorAll('.catalog__mobile-filter-item');
    const filterNode = document.querySelector('.catalog__aside');
    const closeFilterTabled = document.querySelector('.catalog__aside-close');
    const body = document.querySelector('body');
    // кнопка вернутся обратно
    const btnBack = document.querySelector('.catalog-mobile-top__back-btn');
    const btnBackFilter = document.querySelector('.catalog-mobile-top__back-btn-filter');
    const btnCloseFilter = document.querySelector('.catalog-mobile-top__back-close-filter');

    // от 768 до 480
    if(!filterBtnOpen || !fillterButtonsOpenCategory || !filterNode) return;
    // open filter
    const openFilter = () => {
        filterNode.classList.add('is-open');
    }
    
    filterBtnOpen.addEventListener('click', ()=>{
        if(window.innerWidth <= 480) {
            body.classList.add('is-overflow');
            btnBack.style.display = 'none';
            btnBackFilter.style.display = 'none';
            btnCloseFilter.style.display = 'flex';
        }

        openFilter();
    });
    
    closeFilterTabled.addEventListener('click', ()=> {
        if(window.innerWidth <= 480) {
            body.classList.remove('is-overflow');
            btnBack.style.display = 'flex';
            btnBackFilter.style.display = 'none';
            btnCloseFilter.style.display = 'none';
        }
        filterNode.classList.remove('is-open');
    });

    btnCloseFilter.addEventListener('click', ()=> {
        filterNode.classList.remove('is-open');
        btnBack.style.display = 'flex';
        btnBackFilter.style.display = 'none';
        btnCloseFilter.style.display = 'none';
        body.classList.remove('is-overflow');
    });

    // 480
    // Категории
    const categoryNode = document.querySelector('.catalog-category');
    const categoryItems = document.querySelectorAll('.catalog-category__item');
    // Хлебный крошки и хэдер
    const header = document.querySelector('.header');
    const breadCrumbs = document.querySelector('.bread-crumbs');
    // верхняя строка
    const mobileTop = document.querySelector('.catalog-mobile-top');
    // поиск
    const searhc = document.querySelector('.catalog-mobile-top__search');
    const searhcBtn = document.querySelector('.catalog-mobile-top__btn');
    const closeModal = document.querySelector('.catalog-mobile-top__close-btn');

    // сам каталог
    const catalog = document.querySelector('.catalog__inner');
    // кнопка применения фильтра в большом фильтре
    const btnAsideFilter = document.querySelector('.catalog__aside-form-btn');
    const filterForm = document.querySelector('.catalog__aside-form');
    // кнопки мобильного фильтра
    const buttonsMobileMinFilter = document.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile');
    // список выбраных фильтров на мобиле
    const activeFilterList = document.querySelector('.catalog__aside-top');
    // кнопка все 
    const allButtonsFilter = document.querySelectorAll('.catalog__mobile-btn-all-fillter');

    categoryItems.forEach(categoryItem=> {
        categoryItem.addEventListener("click", (e)=> {
            e.preventDefault();
            e.stopPropagation();
            // скрыть категории
            categoryNode.style.display = 'none';
            // скрыть хэдер
            header.style.display = 'none';
            // скрыть хлебные крошки
            breadCrumbs.style.display = 'none';
            // верхняя строка
            mobileTop.style.display = 'flex';
            // изменение заголовка в верху
            mobileTop.querySelector('.catalog-mobile-top__title span').innerHTML = categoryItem.querySelector('.catalog-category__name').innerText;
            mobileTop.querySelector('.catalog-mobile-top__title span').setAttribute('data-text', categoryItem.querySelector('.catalog-category__name').innerText);
            // показать каталог
            catalog.style.display = 'block';
        });
    });

    // открыть строку поиска
    searhcBtn.addEventListener('click', ()=> {
        searhcBtn.setAttribute("type", "submit");
        searhc.classList.add("is-open");
        mobileTop.querySelector('.catalog-mobile-top__title span').style.display = 'none';
    });

    closeModal.addEventListener("click", ()=> {
        searhcBtn.setAttribute("type", "button");
        searhc.classList.remove("is-open");
        mobileTop.querySelector('.catalog-mobile-top__title span').style.display = 'block';
    });

    // вернутся к катологу 
    btnBack.addEventListener("click", ()=> {
        // откатить строку поиска
        searhcBtn.setAttribute("type", "button");
        searhc.classList.remove("is-open");
        mobileTop.querySelector('.catalog-mobile-top__title span').style.display = 'block';

        // скрыть категории
        categoryNode.style.display = 'block';
        // скрыть хэдер
        header.style.display = 'block';
        // скрыть хлебные крошки
        breadCrumbs.style.display = 'block';
        // верхняя строка
        mobileTop.style.display = 'none';
        // изменение заголовка в верху
        mobileTop.querySelector('.catalog-mobile-top__title span').innerHTML = "";
        // скрыть каталог 
        catalog.style.display = 'none';
    });

    // изменение текста на кнопке в зависемости от изменения размера экрана 
    const resizeSetText = () => {
        if(window.innerWidth <= 480) {
            btnAsideFilter.innerHTML = String(btnAsideFilter.getAttribute('data-mobile-text'));
        } else {
            btnAsideFilter.innerHTML = String(btnAsideFilter.getAttribute('data-desctop-text'));
        }
    }
    resizeSetText();

    // функции на изменения документа
    window.addEventListener('resize', ()=> {
        resizeSetText();
    });

    buttonsMobileMinFilter.forEach(btn => {
        btn.addEventListener('click', ()=>{
            // const parent = input.closest('.catalog__aside-accordion-item');

            // if(parent.classList.contains('is-active')) {
            //     parent.classList.toggle('is-active');
            // }
            // else {
            //     parent.classList.add('is-active');
            // }
            btn.classList.toggle('is-active');
            
            if(btn.classList.contains('is-active')) {
                let el = btn.cloneNode(true);
                
                let input = btn.querySelector('input');

                el.classList.add('is-filter-top');
            
                activeFilterList.appendChild(el);
            }
        });
    });
    // удалить элемент фильтра из верхней строки 
    // activeFilterList.addEventListener('click', (e)=> {
    //     let el = e.target.closest('.catalog__aside-accordion-item');
    //     if(!el) return
        
    //     const inputName = el.querySelector('input').getAttribute('name');

    //     document.querySelectorAll('.catalog__aside-accordion-item').forEach(label=> {
    //         let input = label.querySelector('input');
    //         if(!input) return;
            
    //         if(input.getAttribute('name') === inputName) {
    //             label.classList.remove('is-active');
    //         }
    //     });
    // });
    // открыть полный фильтр 
    allButtonsFilter.forEach(btn => {
        btn.addEventListener('click', ()=> {
            const parent = btn.closest('.catalog__aside-accordion');
            parent.classList.add('is-open-all-filter');

            document.querySelectorAll('.catalog__aside-accordion').forEach(accordion => {
                if(parent !== accordion) {
                    accordion.classList.add('is-hidden');
                }
            });
            mobileTop.querySelector('.catalog-mobile-top__title span').innerHTML = parent.querySelector('.catalog__aside-accordion-header').innerText
            btnBack.style.display = 'none';
            btnCloseFilter.style.display = 'none';
            btnBackFilter.style.display = 'flex';
            activeFilterList.style.display = 'none';
            mobileTop.classList.add('is-pb');
            filterNode.classList.add('is-current-all-open')
        });
    });

    // вернутся к фильтру 
    btnBackFilter.addEventListener('click', ()=> {
        document.querySelectorAll('.catalog__aside-accordion').forEach(accordion => {
            accordion.classList.remove('is-hidden');
            accordion.classList.remove('is-open-all-filter');
            mobileTop.querySelector('.catalog-mobile-top__title span').innerHTML = mobileTop.querySelector('.catalog-mobile-top__title span').getAttribute('data-text');
            btnBack.style.display = 'none';
            btnBackFilter.style.display = 'none';
            btnCloseFilter.style.display = 'flex';
            activeFilterList.style.display = 'flex';
            mobileTop.classList.remove('is-pb');
            filterNode.classList.remove('is-current-all-open')
        });
    });
    
    // Выбрать все checbox's в нутри
    const allLabelChecbox = document.querySelectorAll('.catalog__aside-accordion-item_all');
    
    allLabelChecbox.forEach(el=> {
        el.addEventListener('click', ()=> {
            const parent = el.parentElement.closest('.catalog__aside-accordion-body');

            if(el.querySelector('input').checked === true) {
                el.querySelector('input').checked = false;
                parent.querySelectorAll('.catalog__aside-accordion-item').forEach(i=> {
                    const input = i.querySelector('input')
                    input.checked = false;
                });
            }
            else {
                el.querySelector('input').checked = true;
                parent.querySelectorAll('.catalog__aside-accordion-item').forEach(i=> {
                    const input = i.querySelector('input')
                    input.checked = true;
                });
            }

        });
    });
}

export default catalog;