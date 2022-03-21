console.log('Hello from script.js');


// Activity 2: Write your code for each task below.
// Task 1
let kangaroos = (97+109+89+90)/4;
let gumtrees = (89+92+92+111)/4;
const task_1 = document.getElementById("activity2-task1");

if (kangaroos > gumtrees) task_1.innerHTML = "Kangaroos win";
else if (gumtrees > kangaroos) task_1.innerHTML = "Gumtrees win";
else task_1.innerHTML = "Draw";
// Task 2
kangaroos = (98+113+102+100)/4;
gumtrees = (109+96+124+98)/4;
const task_2 = document.getElementById("activity2-task2");

if(kangaroos > gumtrees && kangaroos >= 100) task_2.innerHTML = "Kangaroos win";
else if (gumtrees > kangaroos && gumtrees >= 100) task_2.innerHTML = "Gumtrees win";
else task_2.innerHTML = "Draw";

// Task 3
kangaroos = (98+112+102+100)/4;
gumtrees = (110+96+107+99)/4;
const task_3 = document.getElementById("activity2-task3");

if(kangaroos > gumtrees && kangaroos >= 100) task_3.innerHTML = "Kangaroos win";
else if (gumtrees > kangaroos && gumtrees >= 100) task_3.innerHTML = "Gumtrees win";
else if (kangaroos === gumtrees && kangaroos >= 100 && gumtrees >= 100) task_3.innerHTML = "Draw";
else task_3.innerHTML = "No team win";

// Task 4

function calculateAverageA(a,b,c,d,e) {
    return (a+b+c+d+e)/5;
}

function determineWinner(avgKang, avgGum) {
    const task4 = document.getElementById("activity2-task4");
    if (avgKang >= 2*avgGum) task4.innerHTML = "Kangaroos win (" + avgKang + " vs. " + avgGum + ")"; 
    else if (avgGum >= 2*avgKang) task4.innerHTML = "Gumtrees win (" + avgGum + " vs. " + avgKang + ")";
    else task4.innerHTML = "No team win";
}
kangaroos = calculateAverageA(44,95,71,85,100);
gumtrees = calculateAverageA(21,54,49,23,34);

determineWinner(kangaroos, gumtrees);

// Activity 3: Write your code for each task below.
// Task 1

function calcTax(income) {
    if(income > 75000) return income * 40 / 100;
    else if (income > 100000) return income * 45 / 100;
    else return income * 35 / 100;
}

// Task 2
function outputTax(income) {
    return "Taxable income was " + income +  ", tax amount was " + calcTax(income) + ", and the income after tax is " + (income-calcTax(income)); 
}

document.getElementById("activity3-task2a").innerHTML = outputTax(65000);
document.getElementById("activity3-task2b").innerHTML = outputTax(85000);
document.getElementById("activity3-task2c").innerHTML = outputTax(101000);


// Activity 4: Write your code for each task below.
// Task 1
const taxableIncomes  = [35000, 45000, 50000, 62000, 70500, 82500, 97000, 101000, 132000, 150000];
// Task 2
const taxes = [];
const netIncomes = [];
// Task 3
for (let x of taxableIncomes) {
    taxes.push(calcTax(x));
    netIncomes.push(x - calcTax(x));
}
document.getElementById("activity4-task3").innerHTML = taxes[5] + ";" + netIncomes[5];

// Task 4
function calculateAverageB(arr) {
    let sum = 0;
    for (let x of arr) {
        sum += x;
    }
    return sum/arr.length;
}

document.getElementById("activity4-task4").innerHTML = calculateAverageB(netIncomes);
