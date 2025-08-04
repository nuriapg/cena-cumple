const totalCena: number = 120;
const importeBebidas: number = 18;
const numeroComensales: number = 6;

const costeComida = totalCena - importeBebidas;
const pagoPorComensal = costeComida / numeroComensales;
const pagoAnfitrion = pagoPorComensal + importeBebidas;

console.log("Cada comensal debe pagar por la comida:", pagoPorComensal.toFixed(2), "€");
console.log("Tú, como anfitrión, pagarás las bebidas:", importeBebidas.toFixed(2), "€");
console.log("En total, tu aportación será:", pagoAnfitrion.toFixed(2), "€");
