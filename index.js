const fs = require('fs');

const input = fs.readFileSync('input2.txt', 'utf-8' ).split('\n').filter(Boolean);
let calibration = 0;
const firstAndLastDigit = [];
const dict = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
  };
  

function sumArray(array) {
    let result = 0;
    for (const number of array){
        result += Number(number);
    }
    return result;
}

input.forEach((element) => {
    const digitsInLine = [];
    Array.from(element).forEach((character,c) => {
        if ( !isNaN(character)){
            digitsInLine[c] = (character);
        }
    });
    Object.keys(dict).forEach((letterDigit) => {
        let position = element.indexOf(letterDigit);
        while (position !== -1) {
            digitsInLine[position] = dict[letterDigit];
            position = element.indexOf(letterDigit, position+1 );
        }
    })
    firstAndLastDigit.push(digitsInLine.filter(n => n)[0].toString() + digitsInLine.filter(n => n).pop().toString());
    calibration = sumArray(firstAndLastDigit);
});

console.log(calibration);




