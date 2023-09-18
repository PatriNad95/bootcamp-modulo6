import { Mensajes, score } from "./modelo";
import {
  botonReset,
  botonWhatHappen,
  botonesJugar,
  muestraPuntuacion,
  pintarCarta,
  showMessage,
} from "./ui";

export function dameCarta() {
  let newCard: number = Math.floor(Math.random() * 10) + 1;
  if (newCard > 7) newCard = newCard + 2;
  return newCard;
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
  showMessage(seleccionMensaje());
  botonReset();
  botonWhatHappen();
};

export const empezarNuevo = (): void => {
  score.puntos = 0;
  pintarCarta(score.puntos);
  showMessage("");
  muestraPuntuacion(score.puntos);
  botonesJugar();
};

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

export function obtenerValorCarta(carta: number): number {
  let puntuacion: number;
  if (carta === 1) {
    puntuacion = 1;
  } else if (carta === 10 || carta === 11 || carta === 12) {
    puntuacion = 0.5;
  } else {
    puntuacion = carta;
  }
  return puntuacion;
}

export const revisarPartida = (jugando: boolean): void => {
  if (score.puntos > 7.5 && jugando) {
    showMessage(seleccionMensaje());
    botonReset();
  }
  if (!jugando) {
    showMessage("Esta puntuación habrias sacado si hubieras seguido jugando");
  }
};

export const pideCarta = (jugando: boolean): void => {
  const carta: number = dameCarta();
  pintarCarta(carta);
  score.puntos = score.puntos + obtenerValorCarta(carta);
  muestraPuntuacion(score.puntos);
  revisarPartida(jugando);
};
