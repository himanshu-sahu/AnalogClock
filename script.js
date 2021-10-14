setInterval(setClock);


const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand');
const secondHand = document.querySelector('[data-second-hand');


function setClock(){
    const currDate = new Date();
    const secondRatio = currDate.getSeconds()/60;
    const minuteRatio = (secondRatio + currDate.getMinutes())/60;
    const hourRatio = (minuteRatio + currDate.getHours())/12;

    setRotation(secondHand,secondRatio);
    setRotation(minuteHand,minuteRatio);
    setRotation(hourHand,hourRatio);
    

}

function setRotation(element,rotaionRatio){
    element.style.setProperty('--rotation',rotaionRatio*360);
}

var check = true;
newFunction();
function newFunction() {
    document.querySelector(".mode-btn").addEventListener("click", () => {
        document.body.classList.toggle('dark');
        if(check){
            document.querySelector(".mode-btn").innerHTML = "Light";
            check = !check;
        }
        else {
            document.querySelector(".mode-btn").innerHTML = "Dark";
            check = !check;
        }
    });
}

