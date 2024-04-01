//1st time working on strings, i usually turn them into arrays, might not be efficent but it works fine :)
function analyzeSentence(sentence) {
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;

    // Iterate through each character in the sentence
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
