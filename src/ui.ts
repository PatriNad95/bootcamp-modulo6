import { mostrarCarta } from "./motor";

const buttonAsk = document.getElementById("askCard");

const noMoreCards = document.getElementById("noMoreCards");

const message = document.getElementById("message");

const startAgain = document.getElementById("startAgain");

const newCardShown = document.getElementById("card");

const whatWouldHappen = document.getElementById("whatWouldHappen");

export function muestraPuntuacion(puntuacion: number) {
  const score = document.getElementById("score");
  if (score !== null && score !== undefined) {
    score.innerHTML = puntuacion.toString();
  }
}

export function pintarCarta(carta: number): void {
  if (
    newCardShown !== null &&
    newCardShown !== undefined &&
    newCardShown instanceof HTMLImageElement
  ) {
    newCardShown.src = mostrarCarta(carta);
  }
}

export function showMessage(mensaje: string) {
  if (message !== null && message !== undefined) {
    message.innerHTML = mensaje;
  }
}

export function botonWhatHappen(): void {
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = false;
  }
}

export function botonesJugar(): void {
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = false;
  }
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = false;
  }
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = true;
  }
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = true;
  }
}

export function botonReset(): void {
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = true;
  }
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = true;
  }
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = false;
  }
}
