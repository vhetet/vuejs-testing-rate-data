const fs = require('fs');
const csv = require('@fast-csv/parse');
const moment = require('moment')

extractWorldData = () => {
    data = {}
    fs.createReadStream('data/world_data.csv')
        .pipe(csv.parse())
        .on('error', error => console.error(error))
        .on('data', row => {
            if (data[row[1]]) {
                data[row[1]].push({
                    dailyTest: row[12],
                    newDailyCase: row[4],
                    dailyPositiveCasePercentage: (row[4] / row[12]) * 100,
                    date: moment(row[2], 'YYYY-MM-DD').format('ddd MMM D Y')
                })
            } else {
                data[row[1]] = []
            }
        })
        .on('end', () => {

            Object.keys(data).map(x => {
                fs.writeFileSync(`data/countries/${x}_covid_test_daily_positive_rate.json`, JSON.stringify(data[x]))
            })
        });
}


module.exports = extractWorldData;