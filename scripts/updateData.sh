echo git fetch
git fetch
echo git checkout master
git checkout master
echo npm i
npm i
echo node scripts/fetchDataForAllStates.js
node scripts/fetchDataForAllStates.js
echo node scripts/fetchWorldData.js
node scripts/fetchWorldData.js
echo git add .
git add .
echo git commit -m 'daily update'
git commit -m 'daily update'
echo git push -u origin master
git push -u origin master