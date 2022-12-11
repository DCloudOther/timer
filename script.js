let mins;
let secs;
let leadingzeroes;
let selected = false;
let started = false;
let interval;

let setTimer = () => {
    if (document.getElementById('SA').checked) {
        document.getElementById('mins').innerText = "45";
        document.getElementById('secs').innerText = "00";
        mins = 45;
        secs = 0;
    } else if (document.getElementById('EX').checked) {
        document.getElementById('mins').innerText = "20";
        document.getElementById('secs').innerText = "00";
        mins = 20;
        secs = 0;
        } else if (document.getElementById('userdef').checked) {
            mins = Number(document.getElementById('udefm').value);
            secs = Number(document.getElementById('udefs').value);

            document.getElementById('mins').innerText = mins;
            document.getElementById('secs').innerText = secs;
    }
    selected = true;
}

let runTimer = () => {
    if (selected && !started) {
        interval = setInterval(updateTimer, 1000);
        document.getElementById('info').innerText = "";
        started = true;
    } else if (!selected) {
        document.getElementById('info').innerText = "Bitte eine Zeitangabe auswählen!";
    }
}
let updateTimer = () => {
    if(mins === 0 && (secs === 1 || secs === 0)) {
        clearInterval(interval);
        document.getElementById('info').innerText = "Zeit abgelaufen!";
        document.getElementById('mins').innerText = "00";
        document.getElementById('secs').innerText = "00";
    }

    if(secs === 0) {
        secs = 59;
        mins--;
    } else {
        secs--;
    }

    document.getElementById('mins').innerText = mins;
    document.getElementById('secs').innerText = secs;

    if (secs < 10) {
        leadingzeroes = "0" + secs.toString()
        document.getElementById('secs').innerText = leadingzeroes;
    }
}

document.getElementById('selButton').onclick = setTimer;
document.getElementById('startButton').onclick = runTimer;