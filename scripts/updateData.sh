git clone git@github.com:vhetet/vuejs-testing-rate-data.git
cd vuejs-testing-rate-data
git checkout -b tempBranch
npm i
echo run the scripts
node scripts/fetchDataForAllStates.js
node scripts/fetchWorldData.js
echo done running the script
git add .
git commit -m 'daily update'
git push -u origin tempBranch
cd ..
# rm -rf vuejs-testing-rate-data
