function capitalise(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function reverseString(string) {
    const arr = [...string]
    let reversed = [];
    arr.forEach((letter) => {
        reversed.unshift(letter)
    })
    return reversed.join("")
}

function calculate(a, b) {
    let mathFns = {
        plus: a + b,
        minus: a - b,
        multiply: a * b,
        divide: a / b,
    }

    return mathFns
}

function ceaserShift(string, num) {
  let shifted = [...string].map((char) => {
    if (char >= 'a' && char <= 'z') {
      const base = 'a'.charCodeAt(0);
      const index = char.charCodeAt(0) - base;
      const wrapped = (index + num) % 26;
      return String.fromCharCode(base + wrapped);
    } else if (char >= 'A' && char <= 'Z') {
      const base = 'A'.charCodeAt(0);
      const index = char.charCodeAt(0) - base;
      const wrapped = (index + num) % 26;
      return String.fromCharCode(base + wrapped);
    } else {
      return char; // punctuation, spaces, etc. unchanged
    }
  }).join('');
  return shifted;
}

function analyseArr(arr) {
    let results = {};
    arr.sort((a, b) => a - b);

    results.average = arr.reduce((total, num) => total + num, 0) / arr.length;
    results.min = arr[0]
    results.max = arr[arr.length - 1]
    results["length"] = arr.length

    return results
}



export {
    capitalise,
    reverseString,
    calculate,
    ceaserShift,
    analyseArr,
}