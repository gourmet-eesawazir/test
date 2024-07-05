/*
// Challenge 1
let johnMass, johnHeight, johnBmi, markMass, markHeight, markBmi;

markMass = 78;
markHeight = 1.69;
markBmi = Number(markMass / markHeight ** 2).toFixed(1);

johnMass = 92;
johnHeight = 1.95;
johnBmi = Number(johnMass / johnHeight ** 2).toFixed(1);

let markHigherBMI;

if (johnBmi > markBmi) {
    markHigherBMI = johnBmi
    console.log(`John's BMI (${johnBmi}) is higher than Marks's (${markBmi})!`)
} else {
    markHigherBMI = markBmi
    console.log(`Mark's BMI (${markBmi}) is higher than John's! (${johnBmi})`)
}
*/

/*
// const dolphinScores = [96, 108, 89];
// const koalasScores = [88, 91, 110];

// const dolphinScores = [97, 112, 101];
// const koalasScores = [109, 95, 123];

const dolphinScores = [97, 112, 101];
const koalasScores = [109, 95, 106];

let dolphinSum = 0;
let koalasSum = 0;

dolphinScores.forEach(element => {
    dolphinSum += element
});

koalasScores.forEach(element => {
    koalasSum += element
});

const dolphinAverage = dolphinSum / dolphinScores.length
const koalasAverage = koalasSum / koalasScores.length

console.log("D avg =", dolphinAverage, "K avg =", koalasAverage);

if (dolphinAverage == koalasAverage && dolphinAverage > 100 && koalasAverage > 100) {
    console.log("Draw between Dolphin's and Koalas'")
} else if (dolphinAverage > koalasAverage && dolphinAverage > 100) {
    console.log("Dolphin's win")
} else if (dolphinAverage < koalasAverage && koalasAverage > 100) {
    console.log("Koalas' win")
} else {
    console.log("Both teams lose")
}
*/

// const billValue = 275;
// const billValue = 40;
const billValue = 430;

const tip = billValue >= 50 && billValue <= 300 ? 0.15 : 0.2;
const totalValue = billValue + (billValue * tip);

console.log("The bill was " + billValue + ", the tip was " + (billValue * tip) + ", and the total value is " + totalValue);
