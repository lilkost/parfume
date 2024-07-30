const maskPhoneInput = () => {
    const phoneInputs = document.querySelectorAll('.phone-input-mask');

    if(!phoneInputs) return;
    
    const maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };

    phoneInputs.forEach(element => {
        const mask = IMask(element, maskOptions);
    });
}

export default maskPhoneInput;