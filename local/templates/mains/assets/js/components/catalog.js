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
    const buttonsMobileMinFilter = document.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile .catalog__aside-form-checbox')
    const buttonsMobileMinFilterAll = document.querySelectorAll('.catalog__aside-accordion-body .catalog__aside-accordion-item .catalog__aside-form-checbox')
    // список выбраных фильтров на мобиле
    const activeFilterList = document.querySelector('.catalog__aside-top');
    // кнопка все 
    const allButtonsFilter = document.querySelectorAll('.catalog__mobile-btn-all-fillter');
    // checbox all 
    const checboxAllСhoose = document.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_all');

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

            mobileTop.querySelector('.catalog-mobile-top__title span').innerHTML = 
                mobileTop.querySelector('.catalog-mobile-top__title span').getAttribute('data-text');

            btnBack.style.display = 'none';
            btnBackFilter.style.display = 'none';
            btnCloseFilter.style.display = 'flex';
            activeFilterList.style.display = 'flex';
            mobileTop.classList.remove('is-pb');
            filterNode.classList.remove('is-current-all-open')
        });
    });

    // = создание выбраного фильтра на главном экране
    const fnCreateNodeFilter = (name, currentParent, inputs, state) => {
        if(typeof name == 'string') {
            const n = name;
            const p = currentParent;
            
            // activeFilterList
            if(!inputs) return;
            // создание элемента фильтра
            const createParent = document.createElement('div');
            createParent.classList.add('catalog__aside-top-current-filter');
            createParent.setAttribute('data-name', n);
    
            createParent.addEventListener('click', ()=> {
                const dataName = String(createParent.getAttribute('data-name'));
                // снять выделение с первого экрана у input's
                p.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile').forEach(item=> {
                    if(item.querySelector('input').name === dataName) {
                        item.classList.remove('is-active');
                    }
                });
                // снять выделение с второго экрана у input's
                p.querySelectorAll('.catalog__aside-accordion-body .catalog__aside-form-checbox').forEach(input=> {
                    if(input.name === dataName) {
                        input.checked = false;
                    }
                });
    
                p.querySelector('.catalog__aside-accordion-item.catalog__aside-accordion-item_all input').checked = false;
    
                createParent.remove();
            });
    
            // пройти по элементам фильтра
            inputs.forEach(input=> {
                const name = input.name;
                if(!name) return;
    
                if(name == n) {
                    const title = input.parentElement.querySelector('.catalog__aside-form-title').innerHTML;
                    
                    createParent.innerHTML = `<p>${title}</p><div class="catalog__aside-form-checbox-decor"></div>`
                    
                    if(activeFilterList.children.length){
                        Array.from(activeFilterList.children).forEach(child=> {
                            const dataName = child.getAttribute('data-name');
    
                            if(dataName === n) {
                                console.log(child)
                            }
                            else {
                                activeFilterList.appendChild(createParent);
                            }
    
                        });
                    } else {
                        activeFilterList.appendChild(createParent);
                    }

                    
                }
            });
        }
        else if(typeof name === 'object') {
            switch(state){
                // создание эллементов
                case 'create':
                    inputs.forEach(inp=> {
                        const inpName = inp.querySelector('input').name;
                        const inpTitle = inp.querySelector('.catalog__aside-form-title').innerHTML;

                        const createElem = document.createElement('div');
                        createElem.classList.add('catalog__aside-top-current-filter');
                        createElem.setAttribute('data-name', inpName);
                        createElem.innerHTML = `<p>${inpTitle}</p><div class="catalog__aside-form-checbox-decor"></div>`;
                        
                        if(activeFilterList.children.length){
                            Array.from(activeFilterList.children).forEach(child=> {
                                const dataName = child.getAttribute('data-name');
        
                                if(dataName === inpName) {
                                    console.log(child)
                                }
                                else {
                                    activeFilterList.appendChild(createElem);
                                }
        
                            });

                            // Получаем все элементы с классом 'item'
                            const items = document.querySelectorAll('.catalog__aside-top-current-filter');
                            const seen = new Set(); // Для отслеживания уникальных значений
                            const duplicates = []; // Для хранения дубликатов

                            items.forEach(item => {
                                const name = item.getAttribute('data-name');
                                if (seen.has(name)) {
                                    duplicates.push(item); // Если элемент уже встречался, добавляем его в массив дубликатов
                                } else {
                                    seen.add(name); // Добавляем уникальное значение в Set
                                }
                            });

                            // Удаляем дубликаты из DOM
                            duplicates.forEach(duplicate => {
                                duplicate.remove();
                            });
                        } else {
                            activeFilterList.appendChild(createElem);
                        }

                        createElem.addEventListener('click', ()=> {
                            const dataName = String(createElem.getAttribute('data-name'));
                            // снять выделение с первого экрана у input's
                            currentParent.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile').forEach(item=> {
                                if(item.querySelector('input').name === dataName) {
                                    item.classList.remove('is-active');
                                }
                            });
                            // снять выделение с второго экрана у input's
                            currentParent.querySelectorAll('.catalog__aside-accordion-body .catalog__aside-form-checbox').forEach(input=> {
                                if(input.name === dataName) {
                                    input.checked = false;
                                }
                            });
                
                            currentParent.querySelector('.catalog__aside-accordion-item.catalog__aside-accordion-item_all input').checked = false;
                
                            createElem.remove();
                        });
                    });
                    break;
                // удаление эллементов с страницы
                case 'remove':
                    // если name пусь
                    if(!name.length) return;
                    if(activeFilterList.children.length) {
                        name.forEach(n=>{
                            Array.from(activeFilterList.children).forEach(item=> {
                                const dataItemName = item.getAttribute('data-name');
                                if(n === dataItemName) {
                                    item.remove();
                                }
                            });
                        });
                    }
                    break
                default:
                    console.error('Что то пошло не так!!!');
                    break;
            }
        }
        else {
            console.error('Не удалось создать элементы фильтра!!!');
        }
    }

    // =выбор фильтра на первом экране=
    buttonsMobileMinFilter.forEach(btn=> {
        btn.addEventListener("click", (e)=> {
            const currentName = btn.name;
            const parentLabel = btn.closest('.catalog__aside-accordion-item');
            
            const parentEl = btn.closest('.catalog__aside-accordion');
            const allChecbox = parentEl.querySelector('.catalog__aside-accordion-item.catalog__aside-accordion-item_all input');
            const parentElAll = parentEl.querySelector('.catalog__aside-accordion-body');
            const labelsAll = parentElAll.querySelectorAll('.catalog__aside-accordion-item');
            
            parentLabel.classList.toggle('is-active');

            if(e.target != allChecbox) {
                allChecbox.checked = false;
            }

            labelsAll.forEach(label=> {
                const lbInput = label.querySelector('input');

                if(!lbInput) return;
                const lbName = lbInput.name;

                if(!lbName) return;

                if(lbName === currentName) {
                    if(parentLabel.classList.contains('is-active')) {
                        lbInput.checked = true;
                        const inputs = parentEl.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile .catalog__aside-form-checbox')
                        fnCreateNodeFilter(currentName, parentEl, inputs);
                    }
                    else{
                        lbInput.checked = false;
                        if(activeFilterList.children.length) {
                            Array.from(activeFilterList.children).forEach(item=> {
                                const itemDataName = item.getAttribute('data-name');

                                if(itemDataName === currentName) {
                                    item.remove();
                                }
                            });
                        }
                    }
                }
            });
        });
    });

    // =выбор фильтра в втором экране
    buttonsMobileMinFilterAll.forEach(btn=>{
        btn.addEventListener("click", (e)=> {
            const currentName = btn.name;
            const parentEl = btn.closest('.catalog__aside-accordion');
            const parentElLabels = parentEl.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile');
            const allChecbox = parentEl.querySelector('.catalog__aside-accordion-item.catalog__aside-accordion-item_all input');
            
            if(e.target != allChecbox) {
                allChecbox.checked = false;
            }

            parentElLabels.forEach(lb=> {
                const inp = lb.querySelector('input');
                if(!inp) return;
                const inpName = inp.name;

                if(inpName === currentName) {
                    if(btn.checked === true) {
                        lb.classList.add('is-active');
                        const inputs = parentEl.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile .catalog__aside-form-checbox')
                        fnCreateNodeFilter(currentName, parentEl, inputs);
                    }
                    else {
                        lb.classList.remove('is-active');
                        if(activeFilterList.children.length) {
                            Array.from(activeFilterList.children).forEach(item=> {
                                const itemDataName = item.getAttribute('data-name');

                                if(itemDataName === currentName) {
                                    item.remove();
                                }
                            });
                        }
                    }
                }

            });
        });
    });

    // создание элементов при выборе всех элементов

    checboxAllСhoose.forEach(alllabel=> {
        const allInput = alllabel.querySelector('input');

        allInput.addEventListener("click", ()=> {
            const parent = allInput.closest('.catalog__aside-accordion');
            const labelsFirst = parent.querySelectorAll('.catalog__aside-accordion-item.catalog__aside-accordion-item_mobile');
            const labelsSecond = parent.querySelectorAll('.catalog__aside-accordion-body .catalog__aside-accordion-item');

            // массив для передачи имен input's;
            const nameArray = [];

            if(allInput.checked === true) {
                labelsFirst.forEach(lb=> {
                    lb.classList.add('is-active');
                    const name = lb.querySelector('input').name;
                    nameArray.push(name);
                });
                labelsSecond.forEach(lb=> {
                    const inp = lb.querySelector('input');
                    if(!inp) return;
                    inp.checked = true;
                });

                fnCreateNodeFilter(nameArray, parent, labelsFirst, 'create');
            }else {
                labelsFirst.forEach(lb=> {
                    lb.classList.remove('is-active');
                    const name = lb.querySelector('input').name;
                    nameArray.push(name);
                });
                labelsSecond.forEach(lb=> {
                    const inp = lb.querySelector('input');
                    if(!inp) return;
                    inp.checked = false;
                });
                fnCreateNodeFilter(nameArray, parent, labelsFirst, 'remove');
            }
        });
    });
}

export default catalog;