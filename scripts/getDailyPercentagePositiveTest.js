// get number of new test per days
test = document.querySelectorAll('tbody')[1].querySelectorAll('tr td:nth-child(3)')
// convert to an array
test = Array.from(test)
// get the textCnntent of the html element and convert it to a number
res = test.map(x => parseFloat(x.textContent.replace(/,/g, '')))
// reverse the array to be in a chronological order
res = res.reverse()
// remove the first element which is N/A
res = res.slice(1)

// get the total of positive test
test2 = document.querySelectorAll('tbody')[1].querySelectorAll('tr td:nth-child(4)')
// convert to an array
test2 = Array.from(test2)
// get the textCnntent of the html element and convert it to a number
res2 = test2.map(x => parseFloat(x.textContent.replace(/,/g, '')))
// reverse the array to have the smallest number at the beginning 
res2 = res2.reverse()
// substract the new daily total to the previous one to get the number of new cases per day
res2 = res2.slice(1).map((curr, i) => curr - res2[i])


// create an array of objec that contains the number of new test, the number of new case and the percentage of positive case
final = res.map((curr, i) => {return {dailyTest: curr, newDailyCase: res2[i], dailyPositiveCasePercentage: (res2[i]/curr) * 100}})

//I need to add the date to that

testDate = document.querySelectorAll('tbody')[1].querySelectorAll('tr td:nth-child(1)')

testDate = Array.from(testDate)

testDate = testDate.reverse()

testDate = testDate.slice(1).map(x => x.textContent)

final.map((f, i) => f['date'] = testDate[i])