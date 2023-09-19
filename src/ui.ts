import { mostrarCarta } from "./motor";

const buttonAsk = document.getElementById("askCard");

const noMoreCards = document.getElementById("noMoreCards");

const message = document.getElementById("message");

const startAgain = document.getElementById("startAgain");

const newCardShown = document.getElementById("card");

const whatWouldHappen = document.getElementById("whatWouldHappen");

export function muestraPuntuacion(puntuacion: number) {
  const score = document.getElementById("score");
  if (
    score !== null &&
    score !== undefined &&
    score instanceof HTMLHeadingElement
  ) {
    score.innerHTML = puntuacion.toString();
  } else {
    console.error("El elemento con id score no es un elemento h1");
  }
}

export function pintarCarta(carta: number): void {
  if (
    newCardShown !== null &&
    newCardShown !== undefined &&
    newCardShown instanceof HTMLImageElement
  ) {
    newCardShown.src = mostrarCarta(carta);
  } else {
    console.error("El elemento con id newCardShown no es un elemento image");
  }
}

export function showMessage(mensaje: string): void {
  if (
    message !== null &&
    message !== undefined &&
    message instanceof HTMLElement
  ) {
    message.innerHTML = mensaje;
  } else {
    console.error("El elemento con id message no es un elemento HTML");
  }
}

export function buttonStartAgain(mostrar: boolean) {
  if (
    startAgain !== null &&
    startAgain !== undefined &&
    startAgain instanceof HTMLButtonElement
  ) {
    startAgain.hidden = mostrar;
  } else {
    console.error("El elemento con id startAgain no es un elemento button");
  }
}

export function buttonNoMoreCards(mostrar: boolean) {
  if (
    noMoreCards !== null &&
    noMoreCards !== undefined &&
    noMoreCards instanceof HTMLButtonElement
  ) {
    noMoreCards.hidden = mostrar;
  } else {
    console.error("El elemento con id noMoreCards no es un elemento button");
  }
}

export function buttonAskShow(mostrar: boolean) {
  if (
    buttonAsk !== null &&
    buttonAsk !== undefined &&
    buttonAsk instanceof HTMLButtonElement
  ) {
    buttonAsk.hidden = mostrar;
  } else {
    console.error("El elemento con id buttonAsk no es un elemento button");
  }
}

export function buttonWhatWouldHappen(mostrar: boolean) {
  if (
    whatWouldHappen !== null &&
    whatWouldHappen !== undefined &&
    whatWouldHappen instanceof HTMLButtonElement
  ) {
    whatWouldHappen.hidden = mostrar;
  } else {
    console.error(
      "El elemento con id whatWouldHappen no es un elemento button"
    );
  }
}
