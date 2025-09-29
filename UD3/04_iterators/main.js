'use strict'

const assert = require('assert').strict;

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  console.log('--- iterateSimple ---');
  for (let i = 0; i < pilots.length; i++) {
    console.log(pilots[i]);
  }
}

function iterateForEach() {
  console.log('--- iterateForEach ---');
  pilots.forEach(pilot => console.log(pilot));
}

function mapIds() {
  console.log('--- mapIds ---');
  let pilotsId = pilots.map(pilot => pilot.id)
  console.log(pilotsId);
  return pilotsId
}

function rebels() {
  console.log('--- rebelsFilter ---');
  const rebelPilots = pilots.filter(pilot => pilot.faction === 'Rebels');
  console.log(rebelPilots); 
  return rebelPilots; 
}

function totalFaction(faction) {
  console.log('--- totalFaction ---');
  // return pilots.filter(p => p.faction === faction).length;
  const totalPilotos = pilots.reduce((acumulacion, pilot) => {
    if (pilot.faction === faction) {
      return acumulacion + 1;
    }
    return acumulacion;
  }, 0); 
  
  console.log(`Facción ${faction} tiene ${totalPilotos} pilotos. `);
  return totalPilotos;
}

function avgYears(faction) {
  console.log('--- avgYears ---');
  
  // Filtrar pilotos
  const factionPilots = pilots.filter(pilots => pilots.faction === faction);
  
  // Sumar años 
  const añosTotales = factionPilots.reduce((acc, pilots) => acc + pilots.years, 0);

  // Calcular media 
  const media = añosTotales / factionPilots.length;
  
  console.log(`Facción ${faction} media años: ${media}`);
  return media;
}

iterateSimple()
iterateForEach()
try {
  assert.deepStrictEqual(mapIds(), [2,8,40,66])
  assert.deepStrictEqual(rebels(), [pilots[0], pilots[3]])
  assert.deepStrictEqual(totalFaction('Rebels'), 2)
  assert.deepStrictEqual(avgYears('Rebels'), 22.5)
  assert.deepStrictEqual(avgYears('Empire'), 25)
} catch (error) {
  console.error(error)
}