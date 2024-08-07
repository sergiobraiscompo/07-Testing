import { handle_click } from "./shell";


// Elementos HTML
export const mensaje_element = document.getElementById("mensaje");
export const tablero_element = document.getElementById("tablero");
export const puntuacion_element = document.getElementById("puntuacion");
export const contenedor_botones_element = document.getElementById("contenedor-botones");

// Botón pedir carta
export const boton_pedir_carta = document.getElementById("pedir_carta");
boton_pedir_carta?.addEventListener("click", () => handle_click("pedirCarta"));

// Botón mePlanto
export const boton_me_planto = document.getElementById("me_planto");
boton_me_planto?.addEventListener("click", () => handle_click("mePlanto"));