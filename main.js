//1st time working on strings, i usually turn them into arrays, might not be efficent but it works fine :)
//this code contain the answers for all DSA checkpoint 
function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    //iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];

        length++;

        //check if the character is a space to count words
        if (char === ' ') {
            wordCount++;
        }

        //check if the character is a vowel
        if ('aeiouAEIOU'.includes(char)) {
            vowelCount++;
        }
    }
    //adding 1 to the word count to account for the last word
    wordCount++;
    return { length, wordCount, vowelCount };
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i]; 
  
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; 
        j--;
      }
      arr[j + 1] = key; 
    }
  
    return arr;
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

const isPalindromeRecursive = (normalizedStr) => {
    if (normalizedStr.length <= 1) {
        return true;
    }
    if (normalizedStr[0] !== normalizedStr[normalizedStr.length - 1]) {
        return false;
    }
    return isPalindromeRecursive(normalizedStr.slice(1, -1));
};

function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent === 1) {
        return base;
    }
    if (exponent > 0) {
        return base * power(base, exponent - 1);
    }
    else {
        return 1 / (base * power(base, -exponent - 1));
    }
}

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } 
            else {
                return false;
            }
        } 
        else {
            return true;
        }
    } 
    else {
        return false;
    }
}
console.log(isLeapYear(2025))