import * as model from "./model";
import { dameCarta } from "./motor";

// vi.spyOn(sumarPuntuacion, "", "get").mockReturnValue(7.6);

describe("muestraMensaje", () => {
    // Comprueba si se ejecuta la función gameOver cuando la puntuación supera 7.5
    it("debería devolver el mensaje Has hecho más de 7 puntos y medio, partida terminada. y ejecutarse la funcion gameOver", () => {
        // Arrange
        const mensajeEsperado = "Has hecho más de 7 puntos y medio, partida terminada.";
        
        // Act
        dameCarta;
        const mensaje = model.partida.mensaje;

        // Assert
        expect(mensaje).toBe(mensajeEsperado);
    });

});