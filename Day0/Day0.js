
//This function returns the reversed string value, when a string is passed as an argument
function reverseString(words) {

    //create two constants to assign the word and word length
    const word = words;
    const wordLength = word.length;

    //chech whether the string is empty
    if(wordLength >= 1 ){

        //create two arrays to store the index values and the letters
        let letterIndex = [];
        let letters = [];
        
        /*assign values for letterIndex array to use it when assigning
        the values to the letters array in reverse way*/
        for(let i = 0; i < wordLength; i++){

            // the value of letter index should be wordLength - (i+1)
            letterIndex[i] = wordLength - (i+1);

        }

        //for loop to assign values to the letters array
        for(let i = wordLength - 1; i >= 0; i--){

            /*use letterIndex[i] value as the index of letters to reverse 
            the array */
            letters[letterIndex[i]]= word.charAt(i);

        }

        //join("") use to join the values of the array without ,s
        return letters.join("");

    }
    
    //return an error
    return "The string is empty";
}

 