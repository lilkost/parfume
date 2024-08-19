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
}

export default inputsPointer;