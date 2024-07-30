const scrollPositionMobileButton = () => {
    const buttos = document.querySelector('.buttons-mobile');

    if(!buttos) return;

    window.addEventListener('wheel', (e)=> {
        if(e.wheelDeltaY < 0) {
            buttos.style.bottom = '-100px'
        }else {
            buttos.style.bottom = '0px'
        }
    });

    let startY, endY;

    document.addEventListener('touchstart', function(event) {
        startY = event.touches[0].clientY;
    });

    document.addEventListener('touchmove', function(event) {
        endY = event.touches[0].clientY;
        if (startY && endY) {
            if (endY > startY) {
                buttos.style.bottom = '0px'
            } 
            else {
                buttos.style.bottom = '-100px'
            }
        }
    });

    document.addEventListener('touchend', function() {
        startY = endY = 0;
    });
}

export default scrollPositionMobileButton;