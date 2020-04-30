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

* validate that the action is working properly and update it to push to master directly?? 
* Check why is creates that merge commit? 
* Check that the cron job is triggered properly. 
* Remove the trigger on PR once the rest is validated
* squash all the 'test commit' I used to configure actions?