const ReverseOnlyAlphebet = (word) => {

    //define pointers
    let letters = word.split(""); 
    let firstIndx = 0;
    let lastIndex = word.length - 1;
    

    while(firstIndx < lastIndex) { 
        //if it is not a letter, increase the first index value  
        if(!(( word.charAt(firstIndx) >= 'A' && word.charAt(firstIndx) <= 'Z' ) || (word.charAt(firstIndx) >= 'a' && word.charAt(firstIndx) <= 'z')))  {
            firstIndx++;
        }

        //if it is not a letter, decrease the last index value
        if(!(( word.charAt(lastIndex) >= 'A' && word.charAt(lastIndex) <= 'Z' ) || (word.charAt(lastIndex) >= 'a' && word.charAt(lastIndex) <= 'z'))) {
            lastIndex--;
        }

        //if both first and last are letters, swap them. Then increase the first index value and decrease the lastIndex value
        if(
            ((word.charAt(firstIndx) >= 'A' && word.charAt(firstIndx) <= 'Z' ) || (word.charAt(firstIndx) >= 'a' && word.charAt(firstIndx) <= 'z'))
           && 
            (( word.charAt(lastIndex) >= 'A' && word.charAt(lastIndex) <= 'Z' ) || (word.charAt(lastIndex) >= 'a' && word.charAt(lastIndex) <= 'z'))
          ) {
                let temp = letters[firstIndx];
                letters[firstIndx] = letters[lastIndex];
                letters[lastIndex] = temp;
                firstIndx++;
                lastIndex--;
        }
        

    }

    return letters.join("");

}

//call the function
ReverseOnlyAlphebet("!!AbcD^Ef&&gH90");