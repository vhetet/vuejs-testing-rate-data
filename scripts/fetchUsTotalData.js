const request = require('request');
const axios = require('axios');
const fs = require('fs');
const moment = require('moment')

fetchUsTotalData = () => {
    url = `https://covidtracking.com/api/v1/us/daily.json`;
    axios.get(url).then(res => {
        body = res.data
        data = body.map(x => {
            return {
                dailyTest: x.totalTestResultsIncrease,
                newDailyCase: x.positiveIncrease,
                dailyPositiveCasePercentage: (x.positiveIncrease / x.totalTestResultsIncrease) * 100,
                date: moment(x.date, 'YYYYMMDD').format('ddd MMM D Y')
            }
        })
        data = data.reverse();

        fs.writeFileSync(`data/us/us_covid_test_daily_positive_rate.json`, JSON.stringify(data))
    })
}

module.exports = fetchUsTotalData;