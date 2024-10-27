import { partida } from "./model";
import { sumarPuntuacion } from "./motor";
import vi from "vitest"

describe("sumarPuntuacion", () => {
    it("Comprueba si la función cartaAleatoria puede devolver 1", () => {
        // Arrange
        let puntuacionEsperada: number = 1;
        const numeroCarta = vi.spyOn(partida.carta, "cartaAleatoria", "get").mockReturnValue(12);

        // Act
        const puntuacionNueva: number = sumarPuntuacion(numeroCarta);

        // Assert
        expect(puntuacionEsperada).toBe(puntuacion);
    });

});