const request = require('request');
const fs = require('fs');

fetchWorldData = () => {
    url = `https://covid.ourworldindata.org/data/owid-covid-data.csv`;
    request({
        method: 'GET',
        url: url
    }, (err, res, body) => {
        fs.writeFileSync(`src/assets/data/world_data.csv`, body)
    });
}

// module.exports = fetchWorldData;

fetchWorldData()