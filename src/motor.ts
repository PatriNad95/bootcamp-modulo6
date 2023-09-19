import { Mensajes, score } from "./modelo";
import {
  buttonAskShow,
  buttonNoMoreCards,
  buttonStartAgain,
  buttonWhatWouldHappen,
  muestraPuntuacion,
  pintarCarta,
  showMessage,
} from "./ui";

function dameCarta() {
  let newCard: number = obtenerValorAleatorio();
  pintarCarta(newCard);
  const valorRealCarta: number = obtenerValorCarta(newCard);
  return valorRealCarta;
}

function obtenerValorAleatorio() {
  const valorAleatorio: number = Math.floor(Math.random() * 10) + 1;
  return valorAleatorio > 7 ? valorAleatorio + 2 : valorAleatorio;
}

export function mostrarCarta(carta: number) {
  let card: string;
  switch (carta) {
    case 1: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    }
    case 2: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    }
    case 3: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    }
    case 4: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    }
    case 5: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    }
    case 6: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    }
    case 7: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    }
    case 10: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    }
    case 11: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    }
    case 12: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    }
    default: {
      card =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
    }
  }

  return card;
}

export const plantarse = (): void => {
  finalPartidas();
  buttonWhatWouldHappen(false);
};

export const empezarNuevo = (): void => {
  initEvents();
};

export const pideCarta = (): void => {
  calcularCartaYPuntuacion();
  revisarPartida();
};

function finalPartidas() {
  const mensajeAMostrar: string = seleccionMensaje();
  showMessage(mensajeAMostrar);
  botonReset();
}

export function initEvents() {
  score.puntos = 0;
  pintarCarta(0);
  showMessage("");
  muestraPuntuacion(0);
  botonesJugar();
}

export function seleccionMensaje(): string {
  let mensaje = "";
  if (score.puntos <= 4) {
    mensaje = Mensajes.LESS_FOUR;
  } else if (score.puntos === 5) {
    mensaje = Mensajes.EQUAL_FIVE;
  } else if (score.puntos === 7.5) {
    mensaje = Mensajes.EQUAL_SEVEN_HALF;
  } else if (score.puntos > 5 && score.puntos <= 7) {
    mensaje = Mensajes.LESS_SEVEN;
  } else {
    mensaje = Mensajes.GAME_OVER;
  }
  return mensaje;
}

function obtenerValorCarta(carta: number): number {
  return carta <= 7 ? carta : 0.5;
}

export const queHubieraPasado = (): void => {
  calcularCartaYPuntuacion();
  showMessage("Esta puntuación habrias sacado si hubieras seguido jugando");
  botonReset();
};

function calcularCartaYPuntuacion() {
  const carta: number = dameCarta();
  sumarPuntuacion(carta);
  muestraPuntuacion(score.puntos);
}

const revisarPartida = (): void => {
  if (score.puntos > 7.5 || score.puntos === 7.5) {
    finalPartidas();
  }
};

function botonesJugar(): void {
  buttonAskShow(false);
  buttonNoMoreCards(false);
  buttonStartAgain(true);
  buttonWhatWouldHappen(true);
}

function botonReset(): void {
  buttonAskShow(true);
  buttonNoMoreCards(true);
  buttonStartAgain(false);
}

function sumarPuntuacion(carta: number): void {
  score.puntos = score.puntos + carta;
}
