const cheerio = require("cheerio");
const axios = require('axios')
const fs = require('fs');

fetchData = (state) => {
    if (state === "") {
        process.exit();
    }
    url = `https://covidtracking.com/data/state/${state}`;
    axios.get(url).then(res => {
        let $ = cheerio.load(res.data);

        let dailyTest = [];

        $('tbody.state-history-table tr td:nth-child(3)').each(function (i, e) {
            dailyTest[i] = parseFloat($(this).text().replace(/,/g, ''));
        });
        dailyTest = dailyTest.reverse()
        dailyTest = dailyTest.slice(1)
        
        let dailyPositiveTest = [];
        
        $('tbody.state-history-table tr td:nth-child(4)').each(function (i, e) {
            dailyPositiveTest[i] = parseFloat($(this).text().replace(/,/g, ''));
        });
        dailyPositiveTest = dailyPositiveTest.reverse()
        dailyPositiveTest = dailyPositiveTest.slice(1).map((curr, i) => curr - dailyPositiveTest[i])


        let dates = [];

        $('tbody.state-history-table tr td:nth-child(1)').each(function (i, e) {
            dates[i] = $(this).text();
        });
        dates = dates.reverse()
        dates = dates.slice(1)


        final = dailyTest.map((curr, i) => { return { dailyTest: curr, newDailyCase: dailyPositiveTest[i], dailyPositiveCasePercentage: (dailyPositiveTest[i] / curr) * 100 } })
        final.map((f, i) => f['date'] = dates[i])

        fs.writeFileSync(`data/us/${state}_covid_test_daily_positive_rate.json`, JSON.stringify(final))
    })
}

module.exports = fetchData;