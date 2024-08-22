const copyText = () => {
    const copyNodes = document.querySelectorAll('.copy-text');

    if(!copyNodes) return;
    
    const copyTextFn = (node) => {
        const text = String(node.getAttribute('data-copy-text'));

        if(!text) return;
        
        navigator.clipboard.writeText(text)
            .then(() => {
                node.classList.add('is-succes');

                setTimeout(()=> {
                    node.classList.remove('is-succes');
                }, 3000);
            })
            .catch(error => {
                node.classList.add('is-error');

                setTimeout(()=> {
                    node.classList.remove('is-error');
                }, 3000);
            })
    }

    copyNodes.forEach(copy => {
        copy.addEventListener('click', ()=> copyTextFn(copy));
    });
}

export default copyText;