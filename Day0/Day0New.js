const reverseString = (word) => {

    //check whether the string is empty
    if(word.length < 1 ) throw Error ("The string is empty");

    //define leters array
    let letters = word.split(""); 
            
    /*assign values for letters array */
    for(let i = 0; i < word.length / 2 ; i++) {

       //swap the letters
       let temp = letters[i];
       letters[i] = letters[word.length - i - 1];
       letters[word.length - i - 1] = temp;

    }

    //join("") use to join the values of the array without commas
    return letters.join("").toString();     

}

//to call the function
//reverseString("abcde"));