let stopchanging;

const randomColor = () => {
    const hex = 'FEDCBA9876543210'
    let color = '#'
    for (let i=0; i<6; i++) {
        let index = Math.floor(Math.random()*16);
        color+=hex[index];
    }
    return color;
}

function startchanging() {
    stopchanging = setInterval(() => {
        document.querySelector('body').style.backgroundColor = randomColor();
    }, 1000);
}

document.querySelector('#start').addEventListener('click', ()=> {
    startchanging();
})

document.querySelector('#stop').addEventListener('click', ()=> {
    clearInterval(stopchanging);
})