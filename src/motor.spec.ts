import { cartaAleatoria } from "./motor";

describe("cartaAleatoria", () => {
    it("Comprueba si la función cartaAleatoria puede devolver 1", () => {
        // Arrange
        let numeroEsperado: number = 1;

        // Act
        const numeroAleatorio: number = cartaAleatoria();

        // Assert
        expect(numeroAleatorio).toBe(numeroEsperado);
    });

    it("Comprueba si la función cartaAleatoria puede devolver 4", () => {
        // Arrange
        let numeroEsperado: number = 4;

        // Act
        const numeroAleatorio: number = cartaAleatoria();

        // Assert
        expect(numeroAleatorio).toBe(numeroEsperado);        
    });

    it("Comprueba si la función cartaAleatoria puede devolver 7", () => {
        // Arrange
        let numeroEsperado: number = 7;

        // Act
        const numeroAleatorio: number = cartaAleatoria();

        // Assert
        expect(numeroAleatorio).toBe(numeroEsperado);
        
    });

    it("Comprueba si la función cartaAleatoria puede devolver 10", () => {
        // Arrange
        let numeroEsperado: number = 10;

        // Act
        const numeroAleatorio: number = cartaAleatoria();

        // Assert
        expect(numeroAleatorio).toBe(numeroEsperado);
        
    });

});