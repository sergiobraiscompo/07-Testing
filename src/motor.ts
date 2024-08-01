import { cambiaPuntuacion} from "./model";
import { muestraPuntuacion } from "./ui";

// Suma la puntuación de la carta
export const sumarPuntuacion = (carta: number) => {
    let puntuacionCarta = 0;

   // Devualve el valor de la carta
    switch (carta) {
        case 1: {
            puntuacionCarta= 1;
            break;
        }

        case 2: {
            puntuacionCarta = 2;
            break;
        }

        case 3: {
            puntuacionCarta = 3;
            break;
        }

        case 4: {
            puntuacionCarta = 4;
            break;
        }

        case 5: {
            puntuacionCarta = 5;
            break;
        }

        case 6: {
            puntuacionCarta = 6;
            break;
        }

        case 7: {
            puntuacionCarta = 7;
            break;
        }

        case 10: {
            puntuacionCarta = 0.5;
            break;
        }

        case 11: {
            puntuacionCarta = 0.5;
            break;
        }

        case 12: {
            puntuacionCarta = 0.5;
            break;
        }
    }

    cambiaPuntuacion(puntuacionCarta);
    muestraPuntuacion();
};

// Generar carta aleatoria
export const cartaAleatoria = (): number => {
    let generarNumero = Math.floor(Math.random() * (12 - 1));
    if (generarNumero != 0){
        return generarNumero > 7
            ? generarNumero + 2
            : generarNumero;
    } else {
        return generarNumero + 1;
    }
};

