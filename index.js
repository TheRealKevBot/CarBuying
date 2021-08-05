// Let us begin with an example:

// A man has a rather old car being worth $2000. He saw a secondhand car being worth $8000. 
// He wants to keep his old car until he can buy the secondhand one.

// He thinks he can save $1000 each month but the prices of his old car and of the new one decrease of 1.5 percent per month. 
// Furthermore this percent of loss increases of 0.5 percent at the end of every two months. 
// Our man finds it difficult to make all these calculations.

// Can you help him?

// How many months will it take him to save up enough money to buy the car he wants, and how much money will he have left over?

// Parameters and return of function:

// parameter (positive int or float, guaranteed) startPriceOld (Old car price)
// parameter (positive int or float, guaranteed) startPriceNew (New car price)
// parameter (positive int or float, guaranteed) savingperMonth 
// parameter (positive float or int, guaranteed) percentLossByMonth

// nbMonths(2000, 8000, 1000, 1.5) should return [6, 766] or (6, 766)
// Detail of the above example:
// end month 1: percentLoss 1.5 available -4910.0
// end month 2: percentLoss 2.0 available -3791.7999...
// end month 3: percentLoss 2.0 available -2675.964
// end month 4: percentLoss 2.5 available -1534.06489...
// end month 5: percentLoss 2.5 available -395.71327...
// end month 6: percentLoss 3.0 available 766.158120825...
// return [6, 766] or (6, 766)
// where 6 is the number of months at the end of which he can buy the new car and 766 is the nearest integer to 766.158... (rounding 766.158 gives 766).

// Note:

// Selling, buying and saving are normally done at end of month. 
// Calculations are processed at the end of each considered month but if, by chance from the start, the value of the old car is bigger than the value of the new one 
// or equal there is no saving to be made, no need to wait so he can at the beginning of the month buy the new car:

// nbMonths(12000, 8000, 1000, 1.5) should return [0, 4000]
// nbMonths(8000, 8000, 1000, 1.5) should return [0, 0]
// We don't take care of a deposit of savings in a bank:-)

function nbMonths(startPriceOld, startPriceNew, savingsPerMonth, percentLossByMonth){
    let oldCar = startPriceOld
    let newCar = startPriceNew
    let rate = percentLossByMonth
    let savings = 0
    let months = 0
    let answer = []
    while ((savings + oldCar) < newCar) {
        oldCar -= (oldCar * (rate/100))
        newCar -= (newCar * (rate/100))
        savings+= savingsPerMonth
        months++
        months%2 === 1 && months !== 0 ? rate+= .5 : null
    }
    answer.push(months, Math.round((oldCar+savings)-newCar))
    return answer
} 


console.log(nbMonths(2000, 8000, 1000, 1.5), [6, 766])
console.log(nbMonths(12000, 8000, 1000, 1.5) ,[0, 4000])
console.log(nbMonths(25000, 180000, 1000, 1.5) ,[31, 3247])
console.log(nbMonths(12000, 80000, 1500, 1.5) ,[20, 13])
console.log(nbMonths(2000 ,4800 ,1000 ,1.4), [ 3, 343 ])
console.log(nbMonths(2000 ,4000 ,1000 ,1.3), [ 2, 62 ])
console.log(nbMonths(1000 ,4100 ,1000 ,1.4), [ 3, 58 ])
console.log(nbMonths(1100 ,4200 ,1000 ,1.3), [ 3, 49 ])
console.log(nbMonths(2200 ,3000 ,1000 ,1), [ 1, 208 ])
console.log(nbMonths(1900 ,4700 ,1000 ,1.2), [ 3, 327 ])
console.log(nbMonths(2200 ,3100 ,1000 ,1.1), [ 1, 110 ])
console.log(nbMonths(1500 ,3500 ,1000 ,1.3), [ 2, 62 ])
console.log(nbMonths(1200 ,4300 ,1000 ,1.4), [ 3, 58 ])
console.log(nbMonths(1500 ,4600 ,1000 ,1), [ 3, 22 ])
console.log(nbMonths(2500 ,3500 ,1000 ,1), [ 1, 10 ])
console.log(nbMonths(2000 ,4400 ,1000 ,1.5), [ 3, 730 ])
console.log(nbMonths(1400 ,3200 ,1000 ,1.5), [ 2, 262 ])
console.log(nbMonths(1700 ,3800 ,1000 ,1.3), [ 3, 1001 ])
console.log(nbMonths(2400 ,3600 ,1000 ,1.5), [ 2, 842 ])
console.log(nbMonths(1600 ,2800 ,1000 ,1.2), [ 2, 835 ])
console.log(nbMonths(1300 ,3800 ,1000 ,1.5), [ 3, 635 ])
console.log(nbMonths(2300 ,2900 ,1000 ,1.4), [ 1, 408 ])
console.log(nbMonths(1900 ,4500 ,1000 ,1.5), [ 3, 540 ])
console.log(nbMonths(1600 ,4500 ,1000 ,1.5), [ 3, 257 ])
console.log(nbMonths(2300 ,3500 ,1000 ,1.1), [ 2, 832 ])
console.log(nbMonths(1200 ,3300 ,1000 ,1.2), [ 3, 995 ])
console.log(nbMonths(2100 ,3500 ,1000 ,1), [ 2, 635 ])
console.log(nbMonths(2700 ,4300 ,1000 ,1.5), [ 2, 456 ])
console.log(nbMonths(1400 ,4700 ,1000 ,1.5), [ 4, 956 ])
console.log(nbMonths(3000 ,4900 ,1000 ,1), [ 2, 147 ])
console.log(nbMonths(2700 ,2900 ,1000 ,1.1), [ 1, 802 ])
console.log(nbMonths(2900 ,3900 ,1000 ,1.3), [ 1, 13 ])
console.log(nbMonths(1700 ,3600 ,1000 ,1.5), [ 2, 166 ])
console.log(nbMonths(1200 ,4100 ,1000 ,1.3), [ 3, 240 ])
console.log(nbMonths(2900 ,3300 ,1000 ,1.4), [ 1, 606 ])
console.log(nbMonths(2100 ,4800 ,1000 ,1.1), [ 3, 414 ])
console.log(nbMonths(1000 ,4100 ,1000 ,1.3), [ 3, 49 ])
console.log(nbMonths(2100 ,4400 ,1000 ,1.1), [ 3, 798 ])
console.log(nbMonths(1400 ,3500 ,1000 ,1.4), [ 3, 1007 ])
console.log(nbMonths(2000 ,4300 ,1000 ,1.1), [ 3, 798 ])
console.log(nbMonths(2000 ,2900 ,1000 ,1.2), [ 1, 111 ])
console.log(nbMonths(2500 ,3700 ,1000 ,1), [ 2, 830 ])
console.log(nbMonths(2000 ,2500 ,1000 ,1.4), [ 1, 507 ])
console.log(nbMonths(2700 ,3000 ,1000 ,1.2), [ 1, 704 ])