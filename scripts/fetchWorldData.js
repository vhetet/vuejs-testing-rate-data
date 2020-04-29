const axios = require('axios')
const fs = require('fs');
const extractWorldData = require('./extractWorldData')

fetchWorldData = () => {
    return new Promise(resolve => {
        url = `https://covid.ourworldindata.org/data/owid-covid-data.csv`;
        axios.get(url).then(response => {
            fs.writeFileSync(`data/world_data.csv`, response.data)
            resolve('done')
        })
    })
}

fetchWorldData().then(() => {
    extractWorldData()
})

