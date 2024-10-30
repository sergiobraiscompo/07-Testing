import { partida } from "./model";
import { cartaAleatoria, gameOver, plantarse, sumarPuntuacion } from "./motor";
import { vi } from "vitest";

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

describe("cartaAleatoria", () => {
    it("MathRandom lo forzamos a que devuelva 0, debería de devolver 1", () => {
        // Arrange
        const numeroEsperado = 1;
        vi.spyOn(global.Math, 'random').mockReturnValue(0);

        // Act
        const resultado = cartaAleatoria();

        // Assert
        expect(resultado).toBe(numeroEsperado);
    });


    it("MathRandom lo forzamos a que devuelva 0.9, debería de devolver 10", () => {
        // Arrange
        const numeroEsperado = 10;
        vi.spyOn(global.Math, 'random').mockReturnValue(0.9);

        // Act
        const resultado = cartaAleatoria();

        // Assert
        expect(resultado).toBe(numeroEsperado);
    });


    it("MathRandom lo forzamos a que devuelva 0.4, debería de devolver 5", () => {
        // Arrange
        const numeroEsperado = 5;
        vi.spyOn(global.Math, 'random').mockReturnValue(0.4);

        // Act
        const resultado = cartaAleatoria();

        // Assert
        expect(resultado).toBe(numeroEsperado);
    })
})

describe("sumarPuntuacion", () => {
    it("Si recibe 10 debe sumar 0.5 a partida.puntuacion"), () => {
        // Arrange
        partida.puntuacion = 3;
        const resultadoEsperado = 45;

        // Act
        sumarPuntuacion(5);
        
        // Assert
        expect(partida.puntuacion).toBe(resultadoEsperado);
    }
})