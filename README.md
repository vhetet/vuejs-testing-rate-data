# vuejs-testing-rate-data

This is associated to the [graph repo](https://github.com/vhetet/vuejs-chartjs-tresting-rate)

This will serve a the data store. The json are stored in there and the site access them so that I don'thave to package them in the static site.

The scripts are also in here so that the data can be updated. Eventually the plan is to have a cron job that refresh the data daily.

### Update data

``` bash
node scripts/fetchDataForAllStates.js
node scripts/fetchWorldData.js
```

### daily update with github actions

I have set up a github action to run the update script daily and push the changes to the repo. This is still a work in progress.

# TODO

* push to a separate branch do that is does not mess up master and fill up the history?
* fix the script for the world data
* rename all those things to make more sense. It's a timy bit confusing