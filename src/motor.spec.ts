import { partida } from "./model";
import { gameOver, plantarse } from "./motor";

describe("gameOver", () => {
    it("Comprueba si gameOver no cambia partida.partidaAcabada a true", () => {
        // Arrange
        partida.puntuacion = 6;

        // Act
        gameOver();

        // Assert
        expect(partida.partidaAcabada).toBe(false);
        expect(partida.mensaje).not.toEqual("Has hecho más de 7 puntos y medio, partida terminada.");
    });

    it("Comprueba si gameOver no cambia partida.partidaAcabada a true", () => {
        // Arrange
        partida.puntuacion = 7.5;

        // Act
        gameOver();

        // Assert
        expect(partida.partidaAcabada).toBe(false);
        expect(partida.mensaje).not.toEqual("Has hecho más de 7 puntos y medio, partida terminada.");
    });


    it("Comprueba gameOver cambia partida.partidaAcabada a true y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 7.6;

        // Act
        gameOver();

        // Assert
        expect(partida.partidaAcabada).toBe(true);
        expect(partida.mensaje).toEqual("Has hecho más de 7 puntos y medio, partida terminada.");
    });
});

describe("plantarse", () => {
    it("Comprueba si plantarse cambia partida.partidaAcabada a true y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 7.5;

        // Act
        plantarse();

        // Assert
        expect(partida.partidaAcabada).toBe(true);
        expect(partida.mensaje).toEqual("¡Lo has clavado! ¡Enhorabuena!");
    });

    it("Comprueba si plantarse cambia partida.partidaAcabada a true y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 6;

        // Act
        plantarse();

        // Assert
        expect(partida.partidaAcabada).toBe(true);
        expect(partida.mensaje).toEqual("Casi casi ...");
    });

    it("Comprueba si plantarse cambia partida.partidaAcabada a true y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 5;

        // Act
        plantarse();

        // Assert
        expect(partida.mensaje).toEqual("Te ha entrado el canguelo eh?");
    });

    it("Comprueba si plantarse cambia partida.partidaAcabada a true y devuelve el mensaje pertinente", () => {
        // Arrange
        partida.puntuacion = 4;

        // Act
        plantarse();

        // Assert
        expect(partida.mensaje).toEqual("Has sido muy conservador");
    });
});