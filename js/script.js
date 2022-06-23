import Countdown from "./countdown.js";

const tempoRestante = new Countdown("29 juni 2022 09:00:00 GMT-0300");
const tempos = document.querySelectorAll("[data-time]");

function Mostrartempo() {
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoRestante.total[index];
    } );

}
Mostrartempo();
setInterval(Mostrartempo, 1000);