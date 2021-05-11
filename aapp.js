const lugar = require('./lugar/lugar')
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*console.log(argv.direccion);

lugar.getLugarLatLon(argv.direccion).then(resp => {
    console.log(resp);
}).catch(e => consolelog(e));

clima.getClima(19.2585233, -98.8970952).then(resp => {
    console.log(resp + " Grados Celsius");
}).catch(e  => console.log(e));*/

let getInfo = async(direccion) => {
    try {
        let coordenadas = await lugar.getLugarLatLon(argv.direccion);
        let climaTemperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${direccion} con coordenadas ${coordenadas.lat} y ${coordenadas.lng} es ${climaTemperatura}`
    } catch (e) {
        return `Error en la ejecucion de una tarea ${e}`;
    }

}
getInfo(argv.direccion).then(mensaje => console.log(mensaje)).catch(e => console(e));