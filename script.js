const inputString = prompt("Enter your STRING :")
const inputStringSplitted = inputString.split("");
const inputStringSplittedModify = [];

for (let i = 0; i < inputStringSplitted.length; i++) {
    if (inputStringSplitted[i].length > 5) {
        console.log("Its LongWord");
    } else {
        console.log("Its ShortWord");
    }
}


const inputStringSplittedModifyString = inputStringSplittedModify.join(" ");

let wordCounts = 0;
let index = 0;

while (index < inputStringSplitted.length) {
    if (inputStringSplitted[index].toUpperCase().includes("A")) {
        wordCounts++
    }
    index++
}
console.log(`Number of words containing the letter 'A':${wordCounts}`);
