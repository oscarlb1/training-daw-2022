class Coche {
    constructor(marca, modelo, consumoPor100) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.ConsumoPor100 = consumoPor100; 
        this.TotalGasolina = 0; 
        console.log(`Coche creado: ${this.Marca} ${this.Modelo}, Consumo: ${this.ConsumoPor100} L/100km`);
    }

    reposta(litros) {
        if (litros > 0) {
            this.TotalGasolina += litros;
            console.log(`Repostado: ${litros} L. Total de gasolina: ${this.TotalGasolina} L.`);
        } else {
             console.warn("No se puede repostar una cantidad menor a 0 o 0.");
        }
    }

    move(distancia) {
        this.TotalGasolina -= (distancia * this.ConsumoPor100) / 100;
        console.log(`> Movido ${distancia.toFixed(2)} km. Gasolina restante: ${this.TotalGasolina.toFixed(2)} L.`);
    }

    restante() {
        if (this.TotalGasolina <= 0) {
            return 0;
        }
        const kmRestantes = (this.TotalGasolina / this.ConsumoPor100) * 100;
        return kmRestantes;
    }
}


let coche1 = new Coche("Renault", "Clio", 6.0);
coche1.reposta(11)
coche1.move(100)

let coche2 = new Coche("Seat", "Ibiza", 5.0);
coche2.reposta(10)
coche2.move(100)

let coche3 = new Coche("Ford", "Fiesta", 15.0);
coche3.reposta(40)
coche3.move(100)