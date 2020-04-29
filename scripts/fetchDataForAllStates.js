const stateList = require( '../assets/data/state_list.json')
const fetchData = require('./fetchData.js')
const fetchUsTotalData = require('./fetchUsTotalData.js')

stateList.filter(x => x.includes('us/')).map(x => fetchData(x.slice(3)))
fetchUsTotalData()