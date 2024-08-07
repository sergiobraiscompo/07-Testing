import {
    carta_img_element, cartas_folder, 
    partida,
    as_copas, dos_copas, tres_copas, cuatro_copas,
    cinco_copas, seis_copas, siete_copas, sota_copas,
    caballo_copas, rey_copas, carta_boca_abajo
} from "./model";

import * as constantes from "./constantes";

import { creaNuevaPartida, queHabriaPasado } from "./motor";


// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (carta_img_element instanceof HTMLImageElement) {
        carta_img_element.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
    }
};


// Función mostrar puntuación
export const muestraPuntuacion = () => {
    if (constantes.puntuacion_element) {
        constantes.puntuacion_element.innerHTML =  "Puntuación: "+ partida.puntuacion.toString();
    }
};

// Función mostrar puntuación
export const muestraMensaje = () => {
    if (constantes.mensaje_element) {
        constantes.mensaje_element.innerHTML =  partida.mensaje;
    };
}


// Crea el botón nueva partida
export const creaBotonNuevaPartida = () => {
    const nueva_partida_boton = document.createElement("button");
    nueva_partida_boton.innerText = "Nueva Partida";
    nueva_partida_boton.id = "boton-nueva-partida";
    nueva_partida_boton.className = "boton-nueva-partida";
    nueva_partida_boton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    constantes.contenedor_botones_element?.appendChild(nueva_partida_boton);
};


// Crea botón queHabriaPasado
export const creaBotonQueHabriaPasado = () => {
    const que_habria_pasado_boton = document.createElement("button");

    que_habria_pasado_boton.innerText = "¿Qué habría pasado?";
    que_habria_pasado_boton.id = "boton-que-habria-pasado";
    que_habria_pasado_boton.className = "boton-que-habria-pasado";
    que_habria_pasado_boton.onclick = () => queHabriaPasado();

    // Añadiendo el botón nueva partida en pantalla
    constantes.contenedor_botones_element?.appendChild(que_habria_pasado_boton);
};


// Muestra la carta actual
export const mostrarCarta = (carta: number) : void => {

    let ruta_carta = "";

    // Devolver carta aleatoria
    switch (carta) {
        case 1: {
            ruta_carta = cartas_folder + as_copas;
            break;
        }

        case 2: {
            ruta_carta = cartas_folder + dos_copas;
            break;
        }

        case 3: {
            ruta_carta = cartas_folder + tres_copas;
            break;
        }

        case 4: {
            ruta_carta = cartas_folder + cuatro_copas;
            break;
        }

        case 5: {
            ruta_carta = cartas_folder + cinco_copas;
            break;
        }

        case 6: {
            ruta_carta = cartas_folder + seis_copas;
            break;
        }

        case 7: {
            ruta_carta = cartas_folder + siete_copas;
            break;
        }

        case 10: {
            ruta_carta = cartas_folder + sota_copas;
            break;
        }

        case 11: {
            ruta_carta = cartas_folder + caballo_copas;
            break;
        }

        case 12: {
            ruta_carta = cartas_folder + rey_copas;
            break;
        }

        default: {
            ruta_carta = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
            break;
        }
    };

    // Condicional que comprueba que los elementos sean instancias de HTMLImageElement
    if (carta_img_element instanceof HTMLImageElement) {
            carta_img_element.src = ruta_carta;
    }
};