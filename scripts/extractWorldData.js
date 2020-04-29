const fs = require('fs');
const csv = require('@fast-csv/parse');

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
                    date: row[2]
                })
            } else {
                data[row[1]] = []
            }
        })
        .on('end', rowCount => {

            Object.keys(data).map(x => {
                fs.writeFileSync(`data/countries/${x}_covid_test_daily_positive_rate.json`, JSON.stringify(data[x]))
            })
        });
}


module.exports = extractWorldData;