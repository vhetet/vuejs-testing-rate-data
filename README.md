# vuejs-testing-rate-data

This is associated to the [graph repo](https://github.com/vhetet/vuejs-chartjs-tresting-rate)

This will serve a the data store. The json are stored in there and the site access them so that I don'thave to package them in the static site.

The scripts are also in here so that the data can be updated. Eventually the plan is to have a cron job that refresh the data daily.

### Update data

``` bash
node scripts/fetchDataForAllStates.js
node scripts/fetchWorldData.js
```
