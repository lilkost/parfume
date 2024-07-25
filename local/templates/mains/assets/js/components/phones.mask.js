const createMaskPhone = () => {
    const elements = document.querySelectorAll('.phone-mask');

    if(!elements) return;

    const maskOptions = {
        mask: '+{7} (000) 000-00-00'
    };

    elements.forEach(item=> {
        const mask = IMask(item, maskOptions);
    });
}

export default createMaskPhone;