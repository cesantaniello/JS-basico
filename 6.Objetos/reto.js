//Programa que pide 30 nuevos vehiculos

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    console.log(`Marca: ${marca}, Modelo: ${modelo}, Año: ${annio}`);
}

var autos = [];
var numeroTotalAutos = 2;

for (let i = 0; i < numeroTotalAutos; i++){
    var marca = prompt("Ingresa la marca del vehículo");
    var modelo = prompt("Ingresa el modelo del vehículo");
    var annio = prompt("Ingresa el año del vehículo");
    autos.push(new auto(marca, modelo, annio));
}

for(var auto of autos){
    auto(marca, modelo, annio);
}