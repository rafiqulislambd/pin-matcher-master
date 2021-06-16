
var generatePin = document.getElementById('generatePin');
generatePin.addEventListener('click', randomPinGenerate, false);

function randomPinGenerate() {
    let upperValue = 9999;
    let lowerValue = 1000;
    reasultValue = Math.floor(Math.random() * (upperValue - lowerValue) + lowerValue);

    showPin = document.getElementById('showPin');
    showPin.value = reasultValue;
}



function pressPinNumber(setPin) {

    submitValue = form.displayShow.value = form.displayShow.value + setPin;
}


function backSpeace() {

    submitValue = form.displayShow.value = form.displayShow.value.slice(0,-1);
    
}




function submitPin() {

    if (reasultValue == submitValue) {
        var notify = document.getElementsByClassName('notify');
        notify[1].style.display = "block";
    }
    else {
        var notify = document.getElementsByClassName('notify');
        notify[0].style.display = "block";
    }


}