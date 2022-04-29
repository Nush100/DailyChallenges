String.prototype.reverseString = function() {

    //check whether the string is empty
    if(this.length < 1 ) throw Error ("The string is empty");

    //define leters array
    let letters = [];
            
    /*assign values for letters array */
    for(let i = 0; i < this.length; i++){

        // the value of lettershould be the char value at wordLength - (i+1)
        letters[i] = this.charAt(this.length - i - 1);

    }

    //join("") use to join the values of the array without commas
    return letters.join("");     

}

//call the function
//"abcde".reverseString();