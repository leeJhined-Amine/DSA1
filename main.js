//1st time working on strings, i usually turn them into arrays, might not be efficent but it works fine :)
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