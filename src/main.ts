import { score } from "./modelo";
import { empezarNuevo, pideCarta, plantarse } from "./motor";
import "./style.css";
import { muestraPuntuacion } from "./ui";

muestraPuntuacion(score.puntos);

const buttonAsk = document.getElementById("askCard");

const noMoreCards = document.getElementById("noMoreCards");

const startAgain = document.getElementById("startAgain");

if (buttonAsk !== null && buttonAsk !== undefined) {
  buttonAsk.addEventListener("click", () => pideCarta(true));
}

if (noMoreCards !== null && noMoreCards !== undefined) {
  noMoreCards.addEventListener("click", () => plantarse());
}

if (startAgain !== null && startAgain !== undefined) {
  startAgain.hidden = true;
  startAgain.addEventListener("click", () => empezarNuevo());
}

const whatWouldHappen = document.getElementById("whatWouldHappen");

if (whatWouldHappen !== null && whatWouldHappen !== undefined) {
  whatWouldHappen.hidden = true;
  whatWouldHappen.addEventListener("click", () => pideCarta(false));
}
