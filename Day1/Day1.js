String.prototype.reverseString = function() {
    
    //base error handling
    if(!this || typeof this !== 'string') throw new Error('Invalid string input')

    //Iterative Solution
    let str = this.split('');
    //introduce pointers
    let i = 0;
    let j = str.length - 1;
    let temp = null;
    
    //loop and swap elements in the same string array
    while(i < j){
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        
        i++;
        j--;
    }
    
    
    return str.join('');
}

//To call the function
//"abcde".reverseString();
