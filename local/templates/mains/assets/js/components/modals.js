const modals = () => {
    const modalToggleOpen = (modal, modalInner) => {
        modal.classList.toggle('is-open');

        setTimeout(()=> {
            modalInner.classList.toggle('is-open');
        },300);
    }
    if(document.querySelector('.modal-feadback')) {
        const modal = document.querySelector('.modal-feadback');
        const modalInner = document.querySelector('.modal-feadback__inner');
        const modalOpenBtn = document.querySelectorAll('.open-modal');
        const modalCloseBtn = document.querySelector('.modal-feadback__close-btn');

        modalOpenBtn.forEach(btn=> {
            btn.addEventListener('click', ()=>modalToggleOpen(modal, modalInner));
        });

        modalCloseBtn.addEventListener('click', ()=> modalToggleOpen(modal, modalInner));
    }
}

export default modals;