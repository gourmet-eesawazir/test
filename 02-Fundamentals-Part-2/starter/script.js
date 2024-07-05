'use strict';

/*
const calcAverage = (scores) => {
    let sum = 0;
    scores.forEach(element => {
        sum += element;
    });
    return sum / scores.length
}

// const dolphinsScores = [44, 23, 71];
// const koalasScores = [65, 54, 49];

const dolphinsScores = [85, 54, 41];
const koalasScores = [23, 34, 27];

const dolphinsAverage = calcAverage(dolphinsScores);
const koalasAverage = calcAverage(koalasScores);

const checkWinner = (avgDolphins, avgKoalas) => {
    let winStr = "";
    if (avgDolphins >= avgKoalas * 2) {
        winStr = "Dolphins win (" + avgDolphins + " vs " + avgKoalas + ")";
    } else if (avgKoalas >= avgDolphins * 2) {
        winStr = "Koalas win (" + avgKoalas + " vs " + avgDolphins + ")";
    } else {
        winStr = "Both teams lose";
    }
    return winStr;
}

console.log(checkWinner(dolphinsAverage, koalasAverage));
*/

/*
function calcTip(billValue) {
    let tip = 0;
    if (50 <= billValue && billValue >= 300) {
        tip = 0.15
    } else {
        tip = 0.2
    }
    return tip;
}

const bills = [125, 555, 44];

const tips = [];
bills.forEach(bill => {
    tips.push(calcTip(bill) * bill);
});
console.log("Tips for bills = [" + bills + "] are [" + tips + "]");

const total = [];
for (let i = 0; i < bills.length; i++) {
    total.push(bills[i] + tips[i]);
}

console.log("Total for bills = [" + total + "]");
*/

/*
const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    }
}

const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBmi: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi
    }
}

john.calcBmi();
mark.calcBmi();

if (john.bmi > mark.bmi) {
    console.log("John's BMI (" + john.bmi + ") is higher than Mark's (" + mark.bmi + ")!")
} else {
    console.log("Mark's BMI (" + mark.bmi + ") is higher than John's (" + john.bmi + ")!")
}
*/

/*
Q4 was implemented above for Q2 bonus

Q4 Bonus concept has been implemented somewhere before so no need to implement it here again
*/