const axios = require('axios');

const getLugarLatLon = async(direccion) => {
    let codeurl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${codeurl}&key=AIzaSyCC9Hkjo6PozPO_SDFchuiJAg_ZVGE2Gmc`);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultado para esta ciudad ${direccion}`);
    }
    let location = resp.data.results[0];
    let coordenadas = location.geometry.location;

    console.log('Direccionn en latitud y longitus es: ', location.formatted.address);
    console.log('lat', coordenadas.lat);
    console.log('lng', coordenadas.lng);

    return {
        direccion: location.formatted.address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLon
}