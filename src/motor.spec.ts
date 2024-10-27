import { partida } from "./model";
import { gameOver } from "./motor";

describe("gameOver", () => {
    it("Comprueba si la función gameOver cambia la variable partida.partidaAcabada y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 6;

        // Act
        gameOver();

        // Assert
        expect(partida.mensaje).not.toEqual("Has hecho más de 7 puntos y medio, partida terminada.");
    });

    it("Comprueba si la función gameOver cambia la variable partida.partidaAcabada y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 7.5;

        // Act
        gameOver();

        // Assert
        expect(partida.mensaje).not.toEqual("Has hecho más de 7 puntos y medio, partida terminada.");
    });


    it("Comprueba si la función gameOver cambia la variable partida.partidaAcabada y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 7.6;

        // Act
        gameOver();

        // Assert
        expect(partida.mensaje).toEqual("Has hecho más de 7 puntos y medio, partida terminada.");
    });
});