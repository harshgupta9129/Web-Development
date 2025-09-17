const clock = document.querySelector('#clock')

function updateClock () {
    let timenow = new Date ();
    clock.innerHTML = timenow.toLocaleTimeString();
}

updateClock();

setInterval(updateClock, 1000);
