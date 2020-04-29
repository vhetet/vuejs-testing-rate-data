const request = require('request');
const fs = require('fs');
const moment = require('moment')

fetchUsTotalData = () => {
    url = `https://covidtracking.com/api/v1/us/daily.json`;
    request({
        method: 'GET',
        url: url
    }, (err, res, body) => {
    
        if (err) return console.error(err);
    
        body = JSON.parse(body)
        data = body.map(x => {
            return {
                dailyTest: x.totalTestResultsIncrease,
                newDailyCase: x.positiveIncrease,
                dailyPositiveCasePercentage: (x.positiveIncrease / x.totalTestResultsIncrease) * 100,
                date: moment(x.date, 'YYYYMMDD').format('ddd MMM D Y')
            }
        })
        data = data.reverse();
    
        fs.writeFileSync(`src/assets/data/us/us_covid_test_daily_positive_rate.json`, JSON.stringify(data))
    });
}

module.exports = fetchUsTotalData;