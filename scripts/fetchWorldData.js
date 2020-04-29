const axios = require('axios')
const fs = require('fs');

fetchWorldData = () => {
    url = `https://covid.ourworldindata.org/data/owid-covid-data.csv`;
    axios.get(url).then(response => {
        fs.writeFileSync(`data/world_data.csv`, response.data)
    })
}

// module.exports = fetchWorldData;

fetchWorldData()