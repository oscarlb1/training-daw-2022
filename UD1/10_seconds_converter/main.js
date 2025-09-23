const assert = require('assert').strict;

function toHoursMinutesSeconds(totalSegundos) {
  // Variables
  let SEGUNDOS_POR_HORA = 3600;
  let SEGUNDOS_POR_MINUTO = 60;

  // Cálculos
  let horas = Math.floor(totalSegundos / SEGUNDOS_POR_HORA)
  let segundosRestantes = totalSegundos % SEGUNDOS_POR_HORA
  let minutos = Math.floor(segundosRestantes / SEGUNDOS_POR_MINUTO)
  let segundos = segundosRestantes % SEGUNDOS_POR_MINUTO;
    
  // Resultado
  return `${horas}:${minutos}:${segundos}`;
} 

assert.deepStrictEqual(toHoursMinutesSeconds(3600), "1:0:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3720), "1:2:0")
assert.deepStrictEqual(toHoursMinutesSeconds(3725), "1:2:5")
console.log('Todas las pruebas pasaron correctamente.');