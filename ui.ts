import {
    nuevaPartida, carta_img_element, cartas_folder, 
    puntuacion, reiniciaPuntuacion,
    as_copas, dos_copas, tres_copas, cuatro_copas,
    cinco_copas, seis_copas, siete_copas, sota_copas,
    caballo_copas, rey_copas, carta_boca_abajo
} from "./model";

import { cartaAleatoria, sumarPuntuacion } from "./motor";
import { handle_click } from "./shell";



// Contenedor mensaje
export const mensaje_element = document.getElementById("mensaje");

// Contenedor puntuación
export const puntuacion_element = document.getElementById("puntuacion");

// Contenedor tablero
export const tablero_element = document.getElementById("tablero-display");

// elementos HTML botones
export const nueva_partida_boton = document.getElementById("nueva_partida");
export const boton_pedir_carta = document.getElementById("pedir_carta");

// Botón pedir carta
const pedirCartaBoton = document.getElementById("pedir_carta");
pedirCartaBoton?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
const mePlantoBoton = document.getElementById("me_planto");
mePlantoBoton?.addEventListener("click", () => handle_click("mePlanto"));



// Muestra la parte trasera de las cartas
export const muestraCartaPorDefecto = () => {
    if (carta_img_element instanceof HTMLImageElement) {
        carta_img_element.src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/" + carta_boca_abajo;
    }
};


// Función mostrar puntuación
export const muestraPuntuacion = () => {

    if (puntuacion_element) {
        puntuacion_element.innerHTML =  "Puntuación: "+ puntuacion.toString();
    }
};


export const gameOver = () => {
    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = true
        mePlantoBoton.disabled = true
    };

    muestraMensaje(puntuacion);
    creaBotonNuevaPartida();
};


// Crea el botón nueva partida
export const creaBotonNuevaPartida = () => {
    const nueva_partida_boton = document.createElement("button");

    nueva_partida_boton.innerText = "Nueva Partida";
    nueva_partida_boton.id = "boton_nueva_partida";
    nueva_partida_boton.className = "boton";
    nueva_partida_boton.onclick = () => creaNuevaPartida();

    // Añadiendo el botón nueva partida en pantalla
    tablero_element?.appendChild(nueva_partida_boton);
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

// Muestra mensaje
export const muestraMensaje = (puntuacion: number) => {
    let mensaje = "";

    if (mensaje_element) {
        if (puntuacion === 7.5){
            mensaje = "¡Lo has clavado! ¡Enhorabuena!";
        }

        if (puntuacion > 7.5) {
            mensaje = "Has hecho más de 7 puntos y medio, partida terminada.";
        } else {
        
            if (puntuacion === 6 || puntuacion === 7){
                mensaje = "Casi casi ...";
            }
        
            if (puntuacion === 5){
                mensaje = "Te ha entrado el canguelo eh?";
            }
        
            if (puntuacion <= 4){
                mensaje = "Has sido muy conservador";
            }
        }

        // Pinta el mensaje en pantalla
        if (mensaje_element) {
            mensaje_element.innerHTML = mensaje;
        }
    }

}


// Genera un número aleatorio y devuelve una carta
export const dameCarta = () => {

    // Llamada a la función recibir número aleatorio
    let nuevo_numero = cartaAleatoria();

    mostrarCarta(nuevo_numero);
    sumarPuntuacion(nuevo_numero);

    if (puntuacion > 7.5) {
        gameOver();
    }
};


// Llama a gameover y muestra un mensaje en pantalla
export const plantarse = () => {
    gameOver();
    muestraMensaje(puntuacion);

    creaBotonNuevaPartida;
};


export const creaNuevaPartida = () => {

    if (boton_pedir_carta instanceof HTMLButtonElement && mePlantoBoton instanceof HTMLButtonElement) {
        boton_pedir_carta.disabled = false;
        mePlantoBoton.disabled = false;
    }

    nuevaPartida;
    reiniciaPuntuacion();
    muestraPuntuacion();
    muestraCartaPorDefecto();
};