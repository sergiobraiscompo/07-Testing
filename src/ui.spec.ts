import { vi } from "vitest";
import { muestraMensaje } from "./ui";
import * as model from "./model";

describe("muestraMensaje", () => {
    // Comprueba si se ejecuta la función gameOver cuando la puntuación supera 7.5
    it("debería devolver el mensaje Has hecho más de 7 puntos y medio, partida terminada. y ejecutarse la funcion gameOver", () => {
        // Arrange
        const mensajeEsperado = "Has hecho más de 7 puntos y medio, partida terminada.";
        vi.spyOn(model, "puntuacion","get").mockReturnValue(7.6);

        // Act
        const mensaje = muestraMensaje;

        // Assert
        expect(mensaje).toBe(mensajeEsperado);
    });

});
