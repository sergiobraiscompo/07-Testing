// Géneros musicales
const pop_rock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hard_rock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

// Estilos de texto el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
const estilo_nombre = "font-weight: bold; background-color: #008000; font-size: 15px";

// Interfaz grupo
interface Grupo {
    nombre: string,
    annoFundacion: number,
    enActivo: boolean,
    generoMusical: string,
}

// Grupos
const beatles: Grupo = {
    nombre: "The Beatles",
    annoFundacion: 1960,
    enActivo: true,
    generoMusical: pop_rock,
}

const queen: Grupo = {
    nombre: "Queen",
    annoFundacion: 1970,
    enActivo: false,
    generoMusical: rock,
}

const acdc: Grupo = {
    nombre: "AC-DC",
    annoFundacion: 1973,
    enActivo: true,
    generoMusical: hard_rock,
}

const beethoven: Grupo = {
    nombre: "Ludwig van Beethoven",
    annoFundacion: 1770 ,
    enActivo: false,
    generoMusical: clasica,
}

const rolling: Grupo = {
    nombre: "The Rolling Stones",
    annoFundacion: 1962,
    enActivo: true,
    generoMusical: rock,
}

console.log(beatles);
console.log(queen);
console.log(acdc);
console.log(beethoven);
console.log(rolling);