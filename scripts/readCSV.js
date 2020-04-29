const fs = require('fs');
const csv = require('@fast-csv/parse');

data = {}

fs.createReadStream('src/assets/data/world_data.csv')
    .pipe(csv.parse())
    .on('error', error => console.error(error))
    .on('data', row => {
        if(data[row[1]]) {
            data[row[1]].push({
                dailyTest: row[12],
                newDailyCase: row[4],
                dailyPositiveCasePercentage: (row[4]/row[12]) * 100,
                date: row[2]
            })
        } else {
            data[row[1]] = []
        }
    })
    .on('end', rowCount => {
        // fs.writeFileSync(`src/assets/data/country_list.json`, JSON.stringify(Object.keys(data)))

        Object.keys(data).map(x => {
            fs.writeFileSync(`src/assets/data/countries/${x}_covid_test_daily_positive_rate.json`, JSON.stringify(data[x]))
        })

    });