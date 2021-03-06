const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c54325e17ff091cff938efe592500021`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}