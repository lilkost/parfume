const inputsPointer = () => {
    const inputs = document.querySelectorAll('input');
    
    if(!inputs) return;

    inputs.forEach(element => {
        element.onfocus = () => {
            element.parentElement.classList.add('is-focus')
        }

        element.onblur = () =>{
            element.parentElement.classList.remove('is-focus')
        }
    });
}

export default inputsPointer;