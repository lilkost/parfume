const scrollPositionMobileButton = () => {
    const buttos = document.querySelector('.buttons-mobile');

    if(!buttos) return;

    window.addEventListener('wheel', (e)=> {
        if(e.wheelDeltaY < 0) {
            console.log('Vniz')
            buttos.style.bottom = '-100px'
        }else {
            console.log('verh');
            buttos.style.bottom = '0px'
        }
    });
}

export default scrollPositionMobileButton;