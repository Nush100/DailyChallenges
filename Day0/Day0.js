
function reverseString(words) {
    var word = words;
    var wordLength = word.length;
    var letterIndex = [];
    var letters = [];
                
    for(var i =0; i<wordLength; i++){
        letterIndex[i] = wordLength-i-1;
    }

    for(var i=wordLength-1; i>=0; i--){
        letters[letterIndex[i]]= word.charAt(i);
    }
 
    console.log(letters.join(""));

}
 