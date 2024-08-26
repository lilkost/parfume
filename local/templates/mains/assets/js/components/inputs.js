const inputsPointer = () => {
    const inputs = document.querySelectorAll('input');
    const textArea = document.querySelectorAll('textarea');
    if(!inputs) return;

    inputs.forEach(element => {
        element.onfocus = () => {

            element.parentElement.classList.add('is-focus')
        }

        element.onblur = () =>{
            element.parentElement.classList.remove('is-focus')
        }
    });

    if(!textArea) return;

    textArea.forEach(element => {
        element.onfocus = () => {

            element.parentElement.classList.add('is-focus')
        }

        element.onblur = () =>{
            element.parentElement.classList.remove('is-focus')
        }
    });

    if(document.querySelector('.order__accordion-delivery-label')) {
        const orderLabel = document.querySelectorAll('.order__accordion-delivery-label');

        orderLabel.forEach(label=> {
            label.addEventListener('click', ()=> {

                orderLabel.forEach(lb=> {
                    lb.classList.remove('is-active');
                });

                label.classList.add('is-active');
            });
        });
    }

    if(document.querySelector('.order__accordion-form-day-label')) {
        const orderLabel = document.querySelectorAll('.order__accordion-form-day-label');

        orderLabel.forEach(label=> {
            label.addEventListener('click', ()=> {

                orderLabel.forEach(lb=> {
                    lb.classList.remove('is-active');
                });

                label.classList.add('is-active');
            });
        });
    }

    if(document.querySelector('.order__accordion-form-time-label')) {
        const orderLabel = document.querySelectorAll('.order__accordion-form-time-label');

        orderLabel.forEach(label=> {
            label.addEventListener('click', ()=> {

                orderLabel.forEach(lb=> {
                    lb.classList.remove('is-active');
                });

                label.classList.add('is-active');
            });
        });
    }

    if(document.querySelector('.order__pay-slide')) {
        const orderLabel = document.querySelectorAll('.order__pay-slide');

        orderLabel.forEach(label=> {
            label.addEventListener('click', ()=> {

                orderLabel.forEach(lb=> {
                    lb.classList.remove('is-active');
                });

                label.classList.add('is-active');
            });
        });
    }

    
}

export default inputsPointer;