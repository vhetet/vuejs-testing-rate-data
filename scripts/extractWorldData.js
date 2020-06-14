const fs = require('fs');
const csv = require('@fast-csv/parse');
const moment = require('moment')

extractWorldData = () => {
    data = {}
    fs.createReadStream('data/world_data.csv')
        .pipe(csv.parse())
        .on('error', error => console.error(error))
        .on('data', row => {
            if (data[row[2]]) {
                data[row[2]].push({
                    dailyTest: row[13],
                    newDailyCase: row[5],
                    totalDeath: row[6],
                    newDailyDeath: row[7],
                    dailyPositiveCasePercentage: (row[5] / row[13]) * 100,
                    date: moment(row[3], 'YYYY-MM-DD').format('ddd MMM D Y')
                })
            } else {
                data[row[2]] = []
            }
        })
        .on('end', () => {

            Object.keys(data).map(x => {
                fs.writeFileSync(`data/countries/${x}_covid_test_daily_positive_rate.json`, JSON.stringify(data[x]))
            })
        });
}


module.exports = extractWorldData;