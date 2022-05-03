const reverseString = (str) => {
    // Validating to be a string
    if (typeof str !== "string") throw new Error("Input must be string");

    //Iterative approach
    str = str.split('');
    let i = 0;
    let j = str.length - 1;
    let temp = null;
    
    while(i < j){
        temp = str[i];
        str[i] = str[j];
        str[j] = temp;
        i++;
        j--;
    }

    return str.join('');
};
